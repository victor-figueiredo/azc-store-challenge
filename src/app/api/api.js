import data from "../../../data.json";

export async function getShirts() {
  return data;
}

export async function getShirtsByName(name) {
  const shirts = data.filter((s) => s.title.includes(name));
  return shirts;
}

export async function getById(id) {
  const shirt = data.find((s) => s.id == id);
  if (!shirt) {
    return { error: { message: "Camisa não encontrada." } };
  }
  return shirt;
}

export async function getByGender(g) {
  const shirts = data.filter((s) => s.gender == g);
  return shirts;
}

export async function getShirtsByFilter({ type, value, filteringByGender }) {
  if (type === "Preços") {
    let valueFormated = value.split(" ")[1];
    if (filteringByGender) {
      const shirts = filteringByGender.filter(
        (s) => s.price <= parseInt(valueFormated)
      );
      return shirts;
    }
    const shirts = data.filter((s) => s.price <= parseInt(valueFormated));
    return shirts;
  }

  if (type === "Cores") {
    if (filteringByGender) {
      const shirts = filteringByGender.filter((s) => s.colors.includes(value));
      return shirts;
    }
    const shirts = data.filter((s) => s.colors.includes(value));
    return shirts;
  }

  if (filteringByGender) {
    const shirts = filteringByGender.filter((s) => s.sizes.includes(value));
    return shirts;
  }

  const shirts = data.filter((s) => s.sizes.includes(value));
  return shirts;
}
