import User from "../models/User";

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: `http://localhost:3333/uploads/${user.avatar}`,
      updated_at: user.updated_at,
    };
  },
  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
