module.exports = (sequalize, Sequalize) => {
  const Customer = sequalize.define("customers", {
    no: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: Sequalize.STRING,
    },
    alamat: {
      type: Sequalize.STRING,
    },
    kota: {
      type: Sequalize.STRING,
    },
  });

  return Customer;
};
