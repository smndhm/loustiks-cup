// Backend URL
const backendUrl = "http://164.132.51.82:8080/tabs";

/**
 * Fetch data
 *
 * @param {string} tabName name of the tab we want to get the data from
 * @returns {Promise} Promise with the data
 */
const getSheetsData = (tabName) =>
  fetch(`${backendUrl}/${tabName}`).then((r) => r.json());

/**
 *Get Match tab data
 *
 * @returns {Promise} Promise with the data
 */
export const getMatchsTab = () => getSheetsData("Matchs");

/**
 * Get Poules tab data
 *
 * @param {string} categorie categorie of the poules we want to get the data from
 * @returns {Promise} Promise with the data
 */
export const getEquipes = (categorie) =>
  getSheetsData(`${categorie}%20-%20Poules`);

/**
 * Create match object
 *
 * @param {string} heure hour of the match
 * @param {string} terrain field of the match
 * @param {Array} match match data
 * @param {string} match."0" name of the home team
 * @param {string} match."1" name of the away team
 * @param {string} match."2" score of the home team
 * @param {string} match."3" score of the away team
 * @param {string} match."4" match category
 * @param {string} match."5" match phase
 * @param {string} match."6" match competition
 * @param {string} match."7" match referee
 * @returns {object} match object
 */
export const createMatch = (
  heure,
  terrain,
  [
    equipeDomicile,
    equipeExterieure,
    scoreDomicile,
    scoreExterieur,
    categorie,
    phase,
    competition,
    arbitre,
  ]
) => {
  if (equipeDomicile && equipeExterieure) {
    return {
      heure,
      terrain: terrain?.trim() ?? "",
      domicile: {
        equipe: equipeDomicile?.trim() ?? "",
        score: scoreDomicile === "" ? null : parseInt(scoreDomicile, 10),
      },
      exterieur: {
        equipe: equipeExterieure?.trim() ?? "",
        score: scoreExterieur === "" ? null : parseInt(scoreExterieur, 10),
      },
      categorie: categorie?.trim() ?? "",
      phase: phase?.trim() ?? "",
      competition: competition?.trim() ?? "",
      arbitre: arbitre?.trim() ?? "",
    };
  } else return;
};

/**
 * Get all the matches
 *
 * @returns {Array} Array of match objects
 */
export const getAllMatchs = async () => {
  const allMatchs = [];

  const matchs = await getMatchsTab();

  const [terrain1, terrain2] = matchs[0].filter((row) => row !== "");

  for (let i = 2; i < matchs.length; i++) {
    const heure = matchs[i].shift();
    const match1 = createMatch(heure, terrain1, matchs[i].slice(0, 9));
    const match2 = createMatch(heure, terrain2, matchs[i].slice(8));

    if (match1) allMatchs.push(match1);
    if (match2) allMatchs.push(match2);
  }

  return allMatchs;
};

/**
 * Get Matchs by hours
 *
 * @returns {Array} Array of match objects by hours
 */
export const getMatchsByHours = async () => {
  const hours = [];
  const matchs = await getMatchsTab();

  const [terrain1, terrain2] = matchs[0].filter((row) => row !== "");

  for (let i = 2; i < matchs.length; i++) {
    const heure = matchs[i].shift();
    const match1 = createMatch(heure, terrain1, matchs[i].slice(0, 9));
    const match2 = createMatch(heure, terrain2, matchs[i].slice(8));

    if (match1 || match2) {
      hours.push({
        heure,
        matchs: [match1, match2],
      });
    }
  }
  return hours;
};
