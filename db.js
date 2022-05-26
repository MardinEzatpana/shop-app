const faker = require("faker");

module.exports = () => {
  const data = { slider: [] };
  for (let i = 0; i < 3; i++) {
    data.slider.push({
      id: faker.datatype.uuid(),
      title: faker.name.title(),
      slug: faker.lorem.slug(),
      date: faker.date.soon(),
    });
  }

  return data;
};
