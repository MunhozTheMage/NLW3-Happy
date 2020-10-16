const Database = require("./database/db");
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(req, res) {
        const city = req.query.city;
        return res.render("index", { city });
    },

    async orphanage(req, res) {
        const id = req.query.id;

        try {
            const db = await Database;
            const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);

            orphanage[0].images = orphanage[0].images.split(",");
            orphanage[0].firstImage = orphanage[0].images[0];
            orphanage[0].open_on_weekends = !!(+orphanage[0].open_on_weekends);

            return res.render('orphanage', { orphanage: orphanage[0] });
        }
        catch (error) {

        }
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            console.log(orphanages);
            return res.render("orphanages", { orphanages });
        } 
        catch (error) {
            return res.send("ERROR!");
        }
    },

    createOrphanage(req, res) {
        return res.render("create-orphanage");
    },

    async saveOrphanage(req, res) {
        const form = req.body;

        if(Object.values(form).includes("")) {
            return res.send("Todos os campos devem ser preenchidos!")
        }
        
        try {
            const db = await Database;
            await saveOrphanage(db, 
            {
                lat: form.lat,
                lng: form.lng,
                name: form.name,
                about: form.about,
                whatsapp: form.whatsapp,
                images: form.images.toString(),
                instructions: form.instructions,
                opening_hours: form.opening_hours,
                open_on_weekends: form.open_on_weekends
            } );

            return res.redirect("/orphanages");
        } catch (error) {
            return res.send("ERROR!");
        }
    }
}