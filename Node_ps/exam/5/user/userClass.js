class User {
  constructor(name, numberOfRepos, reposUrl, location, followers) {
    this.name = name;
    this.numberOfRepos = numberOfRepos;
    this.reposUrl = reposUrl;
    this.location = location;
    this.followers = followers;
  }

  toString() {
    const followersStringRep = this.followers
      ? `User followers ${this.followers}`
      : "";
    return `User name: ${this.name}\nNumber of user repositories: ${this.numberOfRepos}\n${followersStringRep}`;
  }
}

module.exports = User;
