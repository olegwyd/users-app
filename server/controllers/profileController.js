const { User, Profile } = require('../models/models');

class ProfileController {
  async addProfile(req, res) {
    try {
      const newProfile = await Profile.create({
        name: req.body.name,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        city: req.body.city,
      });

      const user = await User.findOne({
        where: {
          id: req.body.userId,
        },
      });

      const profile = await user.addProfiles(newProfile);

      const addedProfile = await Profile.findOne({
        where: {
          id: profile[0].profileId,
        },
      });

      res.status(200).send(addedProfile);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async editProfile(req, res) {
    try {
      const { profileId } = req.params;

      const profile = await Profile.findOne({
        where: {
          id: profileId,
        },
      });

      profile.set({
        name: req.body.name,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        city: req.body.city,
      });

      await profile.save();

      const user = await profile.getUsers();

      res.status(200).send({ profile, userId: user[0].id });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async deleteProfile(req, res) {
    try {
      const { profileId } = req.params;

      const profile = await Profile.findOne({
        where: {
          id: profileId,
        },
      });

      await profile.destroy();

      res.status(200).send({ profileId });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
}

module.exports = new ProfileController();
