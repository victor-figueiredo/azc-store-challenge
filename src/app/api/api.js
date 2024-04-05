import data from "../../../data.json";

export async function getShirts() {
  return data;
}

export async function getShirtsByName({ search, filteringByGender }) {
  if (filteringByGender) {
    const shirts = data.filter(
      (s) => s.gender === filteringByGender && s.title.includes(search)
    );
    return shirts;
  }
  const shirts = data.filter((s) => s.title.includes(search));
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
      const shirts = data.filter(
        (s) =>
          s.gender === filteringByGender && s.price <= parseInt(valueFormated)
      );
      return shirts;
    }
    const shirts = data.filter((s) => s.price <= parseInt(valueFormated));
    return shirts;
  }

  if (type === "Cores") {
    if (filteringByGender) {
      const shirts = data.filter(
        (s) => s.gender === filteringByGender && s.colors.includes(value)
      );
      return shirts;
    }
    const shirts = data.filter((s) => s.colors.includes(value));
    return shirts;
  }

  if (filteringByGender) {
    const shirts = data.filter(
      (s) => s.gender === filteringByGender && s.sizes.includes(value)
    );
    return shirts;
  }

  const shirts = data.filter((s) => s.sizes.includes(value));
  return shirts;
}
