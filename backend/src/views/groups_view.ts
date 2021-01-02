import Group from "../models/Group";

export default {
  render(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      avatar: `http://localhost:3333/uploads/${group.avatar}`,
      background: `http://localhost:3333/uploads/${group.background}`,
      created_at: group.created_at,
      updated_at: group.updated_at,
    };
  },
  renderMany(groups: Group[]) {
    return groups.map((group) => this.render(group));
  },
};
