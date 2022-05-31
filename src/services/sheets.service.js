const backendUrl = "http://164.132.51.82:8080/tabs";

/**
 *
 * @returns
 */
export const getMatchsTab = () =>
  fetch(`${backendUrl}/Matchs`).then((r) => r.json());

/**
 *
 * @param {*} heure
 * @param {*} terrain
 * @param {*} param2
 * @returns
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
 *
 * @returns
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
