/**
 * BizKit
 *
 * Créé par Boudah Talenka (https://boudah.pl)
 * Publié sous la GNU General Public License.
 */


/**
 * Liste des joueurs
 * @type {Array}
 */
let joueurs = [];


/**
 * Nombre de joueurs
 * @type {number}
 */
let nombreJoueurs = 0;


/**
 * Nombre maximum de joueurs
 * @type {number}
 * @const
 */''
const maximumJoueurs = 8;


/**
 * Titre stylisé
 * @type {string}
 * @const
 */
const titreStylise = 'B<sub>i</sub>zK<sup>i</sup>t<em>!</em>';


/**
 * Numéro du joueur porteur de la casquette (-1 si la casquette n'est pas là).
 * @type {number}
 */
let k = -1;


/**
 * Sens de rotation du jeu (1: trigonométrique, -1: chronologique)
 * @type {number}
 */
let ss = 1;


/**
 * Numéro du joueur courant (dont c'est le tour de jouer)
 * @type {number}
 */
let l = 0;


/**
 * @type {string}
 * @const
 */
const; u = '<a href=#lancer class=v id=suivant>Suivant</a>';

/**
 * @type {string}
 * @const
 */
let g = ' boit 1 coup</h1>' + u;


/**
 * Remplit un noeud avec du code html
 * @param {string} id Identifiant du noeud.
 * @param {string} html Contenu html.
 */
function remplir(id, html) {
  getId(id).innerHTML = html;
}


/**
 * Crée/modifie la liste des joueurs
 */
function m() {

  let q = [];

  for (let i = 0; i < maximumJoueurs; i++) {
    if (getId('j' + i) && getId('j' + i).value != '')
      q.push({nom: getId('j' + i).value, score: 0});
  }

  for (let i = 0; i < longueur(q); i++) {
    getId('j' + (i + 1)).value = q[i].nom;
  }

  if (getId('j' + (longueur(q) + 1))) getId('j' + (longueur(q) + 1)).value = '';
''
  for (let i = 0; getId('j' + (i + 1)); i++) {
    getId('j' + (i + 1)).style.display = (i < q.length + 1) ? 'block' : 'none';
  }

  joueurs = q;
  nombreJoueurs = longueur(q);
}


/**
 * Lance les 2 dés
 */
function lancerLesDes() {
  afficherResultatLancer(faceAleatoire(), faceAleatoire());
}


/**
 * Relance le 1
 * @param {number} i Le résultat du dé qui n'est pas 1.
 */
function relancerLeUn(i) {
  afficherResultatLancer(i, faceAleatoire());
}


/**
 * Affiche le résultat du lancer de dés
 * @param {number} x résultat du premier dé.
 * @param {number} y résultat du second dé.
 */
function afficherResultatLancer(x, y) {

  let a = [];
  let r = '';

  if (x + y === 7) {

    a.push('BIZKIT !');
    r += '<h1>Le dernier à dire BizKit boit, c\'est qui ?</h1>' + f();
  }
  else if (x < 2 && y < 2) {

    a.push('Donnant-donnant');
    r += '<h1>Qui trinque avec le ' + joueurs[l].nom + ' ?</h1>' + f();
    b(l);
  }
  else if (x < 2 || y < 2) {

    r += '<a href=#jouer class=o id=relance>Relancer le <b>1</b> ?</a>' +
         '<a href=#lancer id=suivant class=v>' +
         ((x == 3 || y == 3) ? 'On change de sens' : 'Suivant') + '</a>';

    getId('relance').onclick = relancerLeUn(Math.max(x, y));

    getId('suivant').onclick = (x == 3 || y == 3) ?
        function() {
          ss *= -1;
          changerJoueur();
        } :
        changerJoueur;
  }

  if (x === 3 && y === 3) {

    a.push('Casquette');
    k = l;

  } else if (k >= 0 && (x === 3 || y === 3)) {

    a.push('Casquette pour ' + joueurs[k].nom);
    b(k);
  }

  if (x == y && x > 1)
  {
    a.push('Double ' + x);
    r += '<div id=dist><a href=#jouer class=v>' +
         'Distribuer ' + x + ' coups</a></div>';

    getId('dist').onclick = w(x, []);
  }
  else if (x + y == 4) a.push('Changement d\'heure');

  if (x + y ==if = 3)
  {
    a.push('Défi');
    r += '<h1>Qui a perdu le défi avec ' + joueurs[l].nom + ' ?</h1>' + f();
  }
  else if (x + y === 9)
  {
    a.push('Antécedent');
    r += '<h1>' + joueurs[(l - ss + nombreJoueurs) % nombreJoueurs].nom + g;
    b((l - ss + nombreJoueurs) % nombreJoueurs);
    getId('suivant').onclick = changerJoueur;
  }
  else if (x + y === 10)
  {
    a.push('Perdant');
    r += '<h1>' + joueurs[l].nom + g;
    b(l);
    getId('suivant').onclick = changerJoueur;
  }
  else if (x + y === 11)
  {
    a.push('Suiveur');
    r += '<h1>' + joueurs[(l + ss + nombreJoueurs) % nombreJoueurs].nom + g;
    b((l + ss + nombreJoueurs) % nombreJoueurs);
    getId('suivant').onclick = changerJoueur;
  }

  if (longueur(a) < 1) a.push('Rien');

  if (r == '') r = u;

  remplir('jouer',
          '<div class=d><b>' + x + '</b><b>' + y + '</b></div>' + r);
  remplir('ttr', '<a href=#regles>' + a.join(' / ') + '</a>');
}


function t() {
  remplir('lcr', joueurs[l].nom);
  remplir('ttr',
          '<a href=#lancer>B<sub>i</sub>z\'<em>' + joueurs[l].nom +
          '!</em></a>');
}


function w(n, t) {

  let r = '<h1>Il reste ' + n + ' coup' + ((n > 1) ? 's' : '') +
          ' à distribuer</h1>';

  let s;

  for (let i = 0; i < nombreJoueurs; i++) {
    s = 0;

    for (let q = 0; q < t.length; q++) {
      if (t[q] == i) s++;
    }

    r += '<a href=#' + ((n > 1) ? 'jouer' : 'lancer') +
         ' class=' + ((i == l) ? 'o' : 'v') +
         ' onClick="w(' + (n - 1) + ',[' + t.join(',') + ',' + i + '])">' +
         joueurs[i].nom + ((s > 0) ? ' : ' + s : '') + '</a>';
  }

  remplir('dist', r);

  if (n < 1) {

    for (let q = 0; q < t.length; q++) {
      if (joueurs[t[q]]) b(t[q]);
    }

    changerJoueur();
  }
}


/**
 * On passe au prochain joueur et on le fait jouer
 */
function changerJoueur() {

  l += ss;

  if (l >= nombreJoueurs) l = 0;
  else if (l < 0) l = nombreJoueurs - 1;

  t();
}


/**
 * @return {string} ?
 */
function f() {
  let r = '';

  for (let i = 0; i < nombreJoueurs; i++)
    r += '<a href=#lancer id=lancer2 class=' + ((i == l) ? 'o' : 'v') +
         ' >' + joueurs[i].nom + '</a>';

  for (let i = 0; i < nombreJoueurs; i++)
    getId('lancer2').onclick = function() {
      b(i);
      changerJoueur();
    };

  return r;
}


/**
 * Le joueur boit un coup
 * @param {number} id Le numéro du joueur.
 */
function b(id) {
  joueurs[id].score++;
}


/**
 * Affiche la liste des scores
 */
function afficherScores() {

  let scores = '';
  let meilleur = l;

  for (let i = 0; i < nombreJoueurs; i++) {

    scores += tag('h3', joueurs[i].nom + ' : ' + joueurs[i].score);

    if (joueurs[i].score > joueurs[meilleur].score) meilleur = i;
  }

  remplir('z', scores);

  remplir('ttr',
          '<a href=#scores><em>' + joueurs[meilleur].nom + '</em> rocks!</a>');
}


/**
 * Longueur d'un tableau
 * @param {Array} i Le Tableau.
 * @return {number} La longueur du tableau.
 */
function longueur(i) {
  return i.length;
}


/**
 * Lancer de dé
 * @return {number} Nombre aléatoire entre 1 et 6.
 */
function faceAleatoire() {
  return Math.ceil(Math.random() * 6);
}


/** Démarrage */
window.onload = function() {

  let listeNomsJoueurs = '';
  for (let i = 1; i <= maximumJoueurs; i++)
    listeNomsJoueurs += tag('input', '', 'j' + i + ' placeholder="Joueur ' + i +
                            '"' + ((i > 2) ? 'style=display:none' : ''));

  document.body.innerHTML =
      tag('header',
          tag('h1',
              '<a href=#bonjour>' + titreStylise + '</a>',
              'ttr')) +
      tag('section',
          tag('nav',
              'Le ' + tag('strong', titreStylise) +
              ' est un jeu fun pour picoler avec des amis<br><br>' +
              tag('h2',
                  '<a href=#regles class=v>Règles</a>' +
                  '<a href=#commencer class=v>Jouer</a>'),
              'bonjour class=x') +
          tag('nav',
              '<div class=x>' +
              '<a href="javascript:history.go(-1)" class="dr v">Retour</a>' +
              '</div>' +

              '<h1>Règles du jeu</h1>' +

              '<p>Chacun son tour, les joueurs lancent les 2 dés.</p>' +

              '<h3>Le <b>1</b></h3>' +
              '<p>Le lanceur peut rejouer un dé si c’est un <b>1</b></p>' +

              '<h3>BizKit <b>?</b>+<b>?</b>=<b>7</b></h3>' +
              '<p>Le dernier à toucher son front avec le pouce en criant ' +
              '<b>BizKit!</b> bois</p>' +

              '<h3>Défi <b>2</b><b>1</b></h3>' +
              '<p>Le lanceur propose un défi à un joueur : ' +
              'le perdant finit son verre</p>' +

              '<h3>Changement d’heure <b>3</b><b>1</b></h3>' +
              '<p>Le jeu tourne dans l’autre sens</p>' +

              '<h3>Double <b>?</b><b>?</b></h3>' +
              '<p>Le lanceur distribue <b>?</b> coups entre les joueurs</p>' +

              '<h3>Donnant-donnant <b>1</b><b>1</b></h3>' +
              '<p>Le lanceur donne un coup à boire et boit lui aussi, ' +
              'puis rejoue</p>' +

              '<h3>la Casquette <b>3</b><b>3</b></h3>' +
              '<p>Le lanceur met une casquette jusqu’au prochain ' +
              '<b>3</b><b>3</b>. Il boira un coup à chaque fois ' +
              'qu’un <b>3</b> sort</p>' +

              '<h3>L’Antécédent <b>?</b>+<b>?</b>=<b>9</b></h3>' +
              '<p>Le joueur suivant le lanceur boit</p>' +

              '<h3>Le perdant <b>?</b>+<b>?</b>=<b>10</b></h3>' +
              '<p>Le lanceur boit</p>' +

              '<h3>Le suiveur <b>?</b>+<b>?</b>=<b>11</b></h3>' +
              '<p>Le joueur suivant le lanceur boit</p>',
              'regles') +
          tag('nav',
              '<h1>Qui veut jouer ?</h1>' +
              listeNomsJoueurs +
              '<h2 class=x>' +
              '<a href=#lancer id=demarrer class=v>Jouer</a>' +
              '</h2>',
              'commencer') +
          tag('nav',
              '<h1>À <em id=lcr></em> de jouer </h1>' +
              '<a href=#scores class=o id=afficherScores>Scores</a> ' +
              '<a href=#jouer class=v id=lancerLesDes>Lancer les dés</a>',
              'lancer class=x') +
          tag('nav', '', 'jouer class=x') +
          tag('nav',
              '<div class=x>' +
              '<a href="javascript:history.go(-1)" class="dr v">Retour</a>' +
              '</div>' +
              '<h1>Scores</h1>' +
              '<div id=z></div>',
              'scores')) +
      tag('footer',
          '© <a href="http://boudah.pl">Boudah Talenka</a> ' +
          '(<a href="http://www.gnu.org/licenses/gpl.html">GNU GPL</a>) ' +
          'L’abus d’alcool numérique n’est pas dangereux pour la santé, ' +
          'à consommer sans modération');

  /** @type {string} */
  document.location.hash = '#bonjour';

  for (let i = 1; i <= maximumJoueurs; i++) getId('j' + i).onkeyup = m;

  getId('demarrer').onclick = t;
  getId('demarrer').onmouseover = m;
  getId('lancerLesDes').onclick = lancerLesDes;
  getId('afficherScores').onclick = afficherScores;
  getId('suivant').onclick = changerJoueur;
};
