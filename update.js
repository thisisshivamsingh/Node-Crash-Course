const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.update(
    { name: "note 5" },
    {
      $set: { name: "max pro 5", price: 550 },
    }
  );
  console.warn(result);
};

updateData();
