export function getTeam() {
  const team = window.localStorage.getItem('team');
  if (team) {
    return JSON.parse(team);
  }
  return [];
}

export function isHeroInTeam(id) {
  const teamIds = getTeam().map((hero) => hero.id);
  return teamIds.indexOf(id) >= 0;
}

export function addHero(hero) {
  const team = getTeam();
  if (isHeroInTeam(hero)) return 'Hero already in team';
  if (team.length >= 6) return 'Team already full';

  team.push(hero);
  window.localStorage.setItem('team', JSON.stringify(team));
  return true;
}

export function removeHero(id) {
  if (!isHeroInTeam(id)) return 'Hero does not belong to team';
  let team = getTeam();
  team = team.filter((hero) => hero.id !== id);
  window.localStorage.setItem('team', JSON.stringify(team));
  return true;
}
