const friendInvitation = require("../../models/friendInvitation");
const friendsUpdate = require("../../socketHandlers/updates/friends");
const User = require("../../models/user");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;

    const invitation = await friendInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send("Error occured.Please try again");
    }

    const { senderId, receiverId } = invitation;

    //add friends to both users
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    //delete invitation
    await friendInvitation.findByIdAndDelete(id);

    //update list of friends if the users are online
    friendsUpdate.updateFriends(senderId.toString());
    friendsUpdate.updateFriends(receiverId.toString());

    //update list of friends pending invitations
    friendsUpdate.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send("Friend successfully added");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong.Please try again");
  }
};

module.exports = postAccept;
