const fs = require('fs');
const path = require('path');
const BANNER = require('../models/banner');
const banner = require('../models/banner');

const getBanner = async (req, res, next) => {
    try {
        const banner = await BANNER.find()
       
        res.render('admin/banner', { banner ,pageTitle:'Banner'})
    } catch (error) {
        next(error)
    }
}



const postBanner = async (req, res, next) => {
    try {
        const { name, url } = req.body

        let image = false
        if (req.file) {
            image = req.file.filename
        }

        const bannerExist = await banner.findOne({ name })
        if (bannerExist && image != false && url != null) {
            await fs.unlink(path.join(__dirname, '../public/bannerImages/') + bannerExist.image, (err) => {
                if (err) {
                    next(err)
                }
            });
            await BANNER.updateOne({ name }, { $set: { image, url } })
        }
        else if (bannerExist && image != false) {
            await fs.unlink(path.join(__dirname, '../public/bannerImages/') + bannerExist.image, (err) => {
                if (err) {
                    next(err)
                }
            });
            await BANNER.updateOne({ name }, { $set: { image } })
        }
        else if (bannerExist && url != null) {
            await BANNER.updateOne({ name }, { $set: { url } })
        }
        else {
            await new BANNER({ name, image, url }).save()
        }
        res.redirect('/admin/banner')

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getBanner,
    postBanner
}