const { Cat } = require("./models/Cat");

const resolvers = {

    Query: {
        cats: async () => {
            try {

                const cats = await Cat.find();
                console.log("Fetched Cats : ", cats);

                return cats;
            }
            catch (error) {
                console.error("Error fetching cats : ", error);
            }
        },

        catById: async (_,{ id }) => {
            try {
              const cat = await Cat.findById(id);
          
              // Check if cat is found before accessing properties
              if (!cat) {
                return null; // Or throw an error if you prefer
              }
          
              console.log("Cat : ", cat);
              return cat;
            } catch (error) {
              throw error;
            }
          }
          
    },

    Mutation: {

        createCat: async (_, { name }) => {
            try {

                const cat = new Cat({ name });
                console.log("New Cat: ", cat);
                await cat.save();

                return cat;
            }
            catch (error) {
                throw error;
            }
        },

        updateCat: async (_, { id, name }) => {
            try {
                const updatedCat = await Cat.findByIdAndUpdate(
                    id,
                    { name },
                    { new: true }
                )


                console.log("Updated Cat : ", updatedCat);

                return updatedCat;
            }
            catch (error) {
                throw error;
            }
        },

        deleteCat: async (_, { id }) => {

            try {
                const deletedCat = Cat.findByIdAndDelete(id);
                
                console.log("Cat deleted");

                return deletedCat;

            }
            catch (error) {
                throw error;
            }
        }
    }
}


module.exports = resolvers ;