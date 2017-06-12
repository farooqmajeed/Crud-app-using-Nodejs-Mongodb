const mongoose  = require('mongoose'),
    Schema = mongoose.Schema;

    //  create Schema
    const eventSchema = new Schema({
        name: String,
        slug: {
            type: String,
            unique: true
        },
        description: String
    });

// middleware ----  
// make sure slug is created
eventSchema.pre('save', function(next){
    this.slug = slugify(this.name);
    next();
})


    // create the model
const eventModel = mongoose.model('Event', eventSchema);

    // export the modal 

    module.exports = eventModel;

    // function slugify

    function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}