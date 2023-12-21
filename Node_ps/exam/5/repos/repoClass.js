class Repos {
  constructor(repos) {
    this.repos = repos;
  }

  toString() {
    let reposStringRep = "User repos names:\n";
    return this.repos.reduce(
      (acc, repo) => (acc += ` * ${repo.name}\n`),
      reposStringRep
    );
  }
}
module.exports = Repos;
