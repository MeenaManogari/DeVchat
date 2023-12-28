const friendInvitation = require("../../models/friendInvitation");
const friendsUpdate = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    //remove that invitation from friend invitations collection
    const invitationExists = await friendInvitation.exists({ _id: id });

    if (invitationExists) {
      await friendInvitation.findByIdAndDelete(id);
    }

    //update pending invitations
    friendsUpdate.updateFriendsPendingInvitations(userId);

    return res.status(200).send("Invitation rejected successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong! please try again.");
  }
};

module.exports = postReject;
