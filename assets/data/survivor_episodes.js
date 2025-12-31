/**
 * Survivor TV Show - Complete Episode Database
 * All episodes from all 49 seasons of the American CBS reality competition series
 * 
 * Structure: episodeInfo[seasonNumber] returns array of episode objects for that season
 * Note: episodeInfo[0] is null (placeholder) so episodeInfo[3] returns Season 3 episodes
 * 
 * Episode object structure:
 * - episodeNumber: Episode number within the season
 * - episodeTitle: Official episode title
 * - episodeSummary: Two-sentence summary of the episode
 * - episodeAirDate: Original air date (YYYY-MM-DD)
 * - episodeBoot: Person(s) eliminated (or null for reunion/recap episodes)
 */

export const episodeData = [
  // Index 0 - Placeholder (no Season 0)
  [],
  // Season 1: Borneo
  [
    {
      episodeNumber: 1,
      episodeTitle: "The Marooning",
      episodeSummary: "Sixteen Americans are abandoned on the island of Pulau Tiga and divided into the Tagi and Pagong tribes. Sonja Christopher becomes the first person ever voted out of Survivor after struggling in the immunity challenge.",
      episodeAirDate: "2000-05-31",
      episodeBoot: "Sonja Christopher"
    },
    {
      episodeNumber: 2,
      episodeTitle: "The Generation Gap",
      episodeSummary: "Generational tensions arise at the Pagong camp as B.B. clashes with younger tribe members over work ethic. B.B. is voted out after his bossy attitude alienates his tribemates.",
      episodeAirDate: "2000-06-07",
      episodeBoot: "B.B. Andersen"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Quest for Food",
      episodeSummary: "Both tribes struggle with hunger as they search for food sources on the island. Stacey Stillman is voted out from Tagi after failing to integrate with the tribe.",
      episodeAirDate: "2000-06-14",
      episodeBoot: "Stacey Stillman"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Too Little, Too Late?",
      episodeSummary: "Ramona battles illness and struggles to contribute to camp life at Pagong. Despite showing improvement, Ramona is voted out as the tribe questions her long-term viability.",
      episodeAirDate: "2000-06-21",
      episodeBoot: "Ramona Gray"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Pulling Your Own Weight",
      episodeSummary: "Richard Hatch begins forming the first alliance in Survivor history with Rudy, Sue, and Kelly. Dirk Been is voted out from Tagi for being too religious and not connecting with the alliance.",
      episodeAirDate: "2000-06-28",
      episodeBoot: "Dirk Been"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Udder Revenge",
      episodeSummary: "The tribes compete in a gross food challenge involving local delicacies. Joel Klug is blindsided by his Pagong tribemates who view him as too controlling.",
      episodeAirDate: "2000-07-05",
      episodeBoot: "Joel Klug"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Merger",
      episodeSummary: "The two tribes merge into Rattana with ten members remaining, marking the first merge in Survivor history. Gretchen Cordy becomes the first victim of the Tagi alliance in a shocking vote with seven people receiving votes.",
      episodeAirDate: "2000-07-12",
      episodeBoot: "Gretchen Cordy"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Thy Name Is Duplicity",
      episodeSummary: "The Tagi alliance continues to systematically eliminate Pagong members despite some Pagong resistance. Greg Buis is voted out and becomes the first member of the jury.",
      episodeAirDate: "2000-07-19",
      episodeBoot: "Greg Buis"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Old and New Bonds",
      episodeSummary: "Jenna struggles with missing her children and the isolation of island life. She is voted out by the Tagi alliance despite attempting to sway Kelly to her side.",
      episodeAirDate: "2000-07-26",
      episodeBoot: "Jenna Lewis"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Crack in the Alliance",
      episodeSummary: "Kelly begins to waver in her commitment to the Tagi alliance, causing tension with her allies. Gervase Peterson is voted out as the systematic elimination of Pagong continues.",
      episodeAirDate: "2000-08-02",
      episodeBoot: "Gervase Peterson"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Long Hard Days",
      episodeSummary: "The remaining castaways endure physical and emotional exhaustion as the game nears its end. Colleen Haskell, the last remaining original Pagong member threat, is voted out.",
      episodeAirDate: "2000-08-09",
      episodeBoot: "Colleen Haskell"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Death of an Alliance",
      episodeSummary: "With Pagong eliminated, the Tagi alliance must turn on itself for the first time. Sean Kenniff, who was never part of the core alliance, is voted out.",
      episodeAirDate: "2000-08-16",
      episodeBoot: "Sean Kenniff"
    },
    {
      episodeNumber: 13,
      episodeTitle: "The Final Four",
      episodeSummary: "Sue delivers her iconic 'snakes and rats' speech at the Final Tribal Council after being eliminated in a tie-breaker vote. Richard controversially drops out of the final immunity challenge, and Kelly votes out Rudy to face Richard in the finals.",
      episodeAirDate: "2000-08-23",
      episodeBoot: "Susan Hawk, Rudy Boesch"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Survivor: The Reunion",
      episodeSummary: "The cast reunites to discuss the season and Richard Hatch is crowned the first Sole Survivor with a 4-3 jury vote over Kelly. The cultural phenomenon of Survivor is examined.",
      episodeAirDate: "2000-08-23",
      episodeBoot: null
    }
  ],

  // Season 2: The Australian Outback
  [
    {
      episodeNumber: 1,
      episodeTitle: "Stranded",
      episodeSummary: "Sixteen new castaways are divided into the Kucha and Ogakor tribes in the Australian Outback. Debb Eaton becomes the first person voted out after clashing with her tribemates.",
      episodeAirDate: "2001-01-28",
      episodeBoot: "Debb Eaton"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Suspicion",
      episodeSummary: "Both tribes work to establish shelter and find food in the harsh Australian environment. Kel Gleason is voted out from Ogakor amid accusations of smuggling beef jerky.",
      episodeAirDate: "2001-02-01",
      episodeBoot: "Kel Gleason"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Trust No One",
      episodeSummary: "Kucha struggles with illness while Ogakor deals with interpersonal conflicts. Maralyn Hershey is voted out for being the weakest member of Ogakor.",
      episodeAirDate: "2001-02-08",
      episodeBoot: "Maralyn Hershey"
    },
    {
      episodeNumber: 4,
      episodeTitle: "The Aussie Way",
      episodeSummary: "The tribes receive a chance to win supplies in a challenging reward competition. Mitchell Olson is voted out from Ogakor after a disappointing challenge performance.",
      episodeAirDate: "2001-02-15",
      episodeBoot: "Mitchell Olson"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Gloves Come Off",
      episodeSummary: "Tensions rise at Kucha as Kimmi and Alicia have a memorable finger-wagging confrontation. Kimmi Kappenberg is voted out for her abrasive personality.",
      episodeAirDate: "2001-02-22",
      episodeBoot: "Kimmi Kappenberg"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Trial by Fire",
      episodeSummary: "Tragedy strikes when Michael Skupin falls into the campfire and suffers severe burns. Michael is medically evacuated, becoming the first medical evacuation in Survivor history.",
      episodeAirDate: "2001-03-01",
      episodeBoot: "Michael Skupin (evacuated)"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Merge",
      episodeSummary: "The tribes merge into Barramundi with ten members, tied 5-5 between original tribes. Jeff Varner is voted out in a tiebreaker based on previous votes received.",
      episodeAirDate: "2001-03-08",
      episodeBoot: "Jeff Varner"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Friends?",
      episodeSummary: "Former Kucha members struggle to survive against the Ogakor majority. Alicia Calaway is voted out as Ogakor maintains control of the game.",
      episodeAirDate: "2001-03-15",
      episodeBoot: "Alicia Calaway"
    },
    {
      episodeNumber: 9,
      episodeTitle: "The First 24 Days: A Closer Look",
      episodeSummary: "A retrospective episode looks back at the first 24 days of the Australian Outback season. Previously unseen footage and interviews provide new perspectives on the game.",
      episodeAirDate: "2001-03-22",
      episodeBoot: null
    },
    {
      episodeNumber: 10,
      episodeTitle: "Honeymoon or Not?",
      episodeSummary: "Romance blooms between Colby and several female castaways while alliances shift. Jerri Manthey is blindsided by her own alliance after becoming too controlling.",
      episodeAirDate: "2001-03-29",
      episodeBoot: "Jerri Manthey"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Let's Make a Deal",
      episodeSummary: "Nick Brown attempts to make deals to save himself in the game. His strategy fails and he is voted out by the dominant alliance.",
      episodeAirDate: "2001-04-05",
      episodeBoot: "Nick Brown"
    },
    {
      episodeNumber: 12,
      episodeTitle: "No Longer Just a Game",
      episodeSummary: "The game becomes increasingly personal as the final six compete for position. Amber Brkich is voted out as Colby maintains control of the game.",
      episodeAirDate: "2001-04-12",
      episodeBoot: "Amber Brkich"
    },
    {
      episodeNumber: 13,
      episodeTitle: "The Outback by the Numbers: A Closer Look",
      episodeSummary: "Another retrospective episode examines the season through statistics and behind-the-scenes footage. The journey to the finale is recapped.",
      episodeAirDate: "2001-04-19",
      episodeBoot: null
    },
    {
      episodeNumber: 14,
      episodeTitle: "The Most Deserving",
      episodeSummary: "Rodger Bingham is voted out for being too likeable, followed by Elisabeth Filarski. Colby wins the final immunity and controversially takes Tina over Keith to the final.",
      episodeAirDate: "2001-04-26",
      episodeBoot: "Rodger Bingham, Elisabeth Filarski"
    },
    {
      episodeNumber: 15,
      episodeTitle: "The Reunion",
      episodeSummary: "Tina Wesson defeats Colby Donaldson 4-3 to become the Sole Survivor. The reunion examines Colby's decision to take Tina and the season's memorable moments.",
      episodeAirDate: "2001-05-03",
      episodeBoot: "Keith Famie"
    }
  ],

  // Season 3: Africa
  [
    {
      episodeNumber: 1,
      episodeTitle: "Question of Trust",
      episodeSummary: "Sixteen castaways are divided into Boran and Samburu tribes in the African savanna. Diane Ogden is the first voted out after suffering from dehydration and weakness.",
      episodeAirDate: "2001-10-11",
      episodeBoot: "Diane Ogden"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Who's Zooming Whom?",
      episodeSummary: "Samburu divides along generational lines between older and younger members. Jessie Camacho is voted out from Boran for her physical struggles.",
      episodeAirDate: "2001-10-18",
      episodeBoot: "Jessie Camacho"
    },
    {
      episodeNumber: 3,
      episodeTitle: "The Gods Are Angry",
      episodeSummary: "A massive storm tests both tribes as they struggle with the harsh African elements. Carl Bilancione is voted out in a contentious Samburu tribal council.",
      episodeAirDate: "2001-10-25",
      episodeBoot: "Carl Bilancione"
    },
    {
      episodeNumber: 4,
      episodeTitle: "The Young and Untrusted",
      episodeSummary: "The first-ever tribe swap shakes up the game, sending members to opposite tribes. Linda Spencer is voted out after failing to adapt to her new tribe.",
      episodeAirDate: "2001-11-01",
      episodeBoot: "Linda Spencer"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Twist",
      episodeSummary: "The swapped tribe members struggle with loyalty to old and new alliances. Silas Gaither becomes a victim of the swap, voted out by former Boran members.",
      episodeAirDate: "2001-11-08",
      episodeBoot: "Silas Gaither"
    },
    {
      episodeNumber: 6,
      episodeTitle: "I'd Never Do It to You",
      episodeSummary: "Alliances solidify as the tribes prepare for the upcoming merge. Lindsey Richter is voted out from Samburu in a unanimous decision.",
      episodeAirDate: "2001-11-15",
      episodeBoot: "Lindsey Richter"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Will There Be a Feast Tonight?",
      episodeSummary: "The tribes merge into Moto Maji with the game now individual. Clarence Black becomes the first post-merge boot after being on the outs.",
      episodeAirDate: "2001-11-22",
      episodeBoot: "Clarence Black"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Merge",
      episodeSummary: "Power struggles emerge in the merged tribe as players jockey for position. Kelly Goldsmith is blindsided after being perceived as a strategic threat.",
      episodeAirDate: "2001-11-29",
      episodeBoot: "Kelly Goldsmith"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Smoking Out the Snake",
      episodeSummary: "Brandon becomes a target for his perceived sneakiness and swing vote potential. Brandon Quinton is voted out as the majority alliance maintains control.",
      episodeAirDate: "2001-12-06",
      episodeBoot: "Brandon Quinton"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Dinner, Movie and a Betrayal",
      episodeSummary: "Frank wins a movie reward and shares an awkward experience with his tribemates. Frank Garrison is voted out for being on the wrong side of the numbers.",
      episodeAirDate: "2001-12-13",
      episodeBoot: "Frank Garrison"
    },
    {
      episodeNumber: 11,
      episodeTitle: "We Are Family",
      episodeSummary: "Loved ones visit brings emotional reunions and new motivation to compete. Teresa Cooper is voted out as the endgame approaches.",
      episodeAirDate: "2001-12-20",
      episodeBoot: "Teresa Cooper"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Big Adventure",
      episodeSummary: "The final four compete in grueling challenges with the end in sight. Tom Buchanan is voted out after losing the crucial immunity challenge.",
      episodeAirDate: "2002-01-03",
      episodeBoot: "Tom Buchanan"
    },
    {
      episodeNumber: 13,
      episodeTitle: "The Final Showdown",
      episodeSummary: "Lex wins final immunity and chooses to take Ethan to face the jury. Kim Johnson finishes in third place.",
      episodeAirDate: "2002-01-10",
      episodeBoot: "Kim Johnson"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Ethan Zohn defeats Kim Johnson 5-2 to become the Sole Survivor. The reunion celebrates the season's unique African setting and memorable moments.",
      episodeAirDate: "2002-01-10",
      episodeBoot: null
    }
  ],

  // Season 4: Marquesas
  [
    {
      episodeNumber: 1,
      episodeTitle: "Back to the Beach",
      episodeSummary: "Sixteen new castaways arrive in the Marquesas Islands of French Polynesia. Peter Harkey is the first voted out from Maraamu after power struggles emerge.",
      episodeAirDate: "2002-02-28",
      episodeBoot: "Peter Harkey"
    },
    {
      episodeNumber: 2,
      episodeTitle: "No Pain, No Gain",
      episodeSummary: "Both tribes deal with the physical toll of island life and challenging conditions. Patricia Jackson is voted out from Maraamu for being too motherly and bossy.",
      episodeAirDate: "2002-03-07",
      episodeBoot: "Patricia Jackson"
    },
    {
      episodeNumber: 3,
      episodeTitle: "No Longer Just a Game",
      episodeSummary: "Hunter Ellis dominates challenges but becomes a threat to his own tribe. Hunter is blindsided in a shocking vote orchestrated by Rob Mariano.",
      episodeAirDate: "2002-03-14",
      episodeBoot: "Hunter Ellis"
    },
    {
      episodeNumber: 4,
      episodeTitle: "The Winds Twist",
      episodeSummary: "A tribe swap sends members to opposite tribes, disrupting established alliances. Sarah Jones is voted out as the new tribal dynamics take shape.",
      episodeAirDate: "2002-03-21",
      episodeBoot: "Sarah Jones"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The End of Innocence",
      episodeSummary: "Rob Mariano's scheming ways catch up with him at Maraamu. Rob is voted out in a blindside, ending his first Survivor journey.",
      episodeAirDate: "2002-03-28",
      episodeBoot: "Rob Mariano"
    },
    {
      episodeNumber: 6,
      episodeTitle: "The Underdogs",
      episodeSummary: "The underdogs at Maraamu fight to survive against a dominant Rotu tribe. Gina Crews is voted out as Maraamu continues to lose numbers.",
      episodeAirDate: "2002-04-04",
      episodeBoot: "Gina Crews"
    },
    {
      episodeNumber: 7,
      episodeTitle: "True Lies",
      episodeSummary: "The tribes merge into Soliantu and the Rotu Four's power structure is revealed. Gabriel Cade is voted out for refusing to play the strategic game.",
      episodeAirDate: "2002-04-11",
      episodeBoot: "Gabriel Cade"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Jury's Out",
      episodeSummary: "The coconut chop challenge exposes the Rotu Four's pecking order to everyone. John Carroll becomes the first jury member after the underdogs unite against him.",
      episodeAirDate: "2002-04-18",
      episodeBoot: "John Carroll"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Two Peas in a Pod",
      episodeSummary: "The power shift continues as the former underdogs take control of the game. Zoe Zanidakis is voted out as the Rotu alliance crumbles.",
      episodeAirDate: "2002-04-25",
      episodeBoot: "Zoe Zanidakis"
    },
    {
      episodeNumber: 10,
      episodeTitle: "The Princess",
      episodeSummary: "Tammy Leitner fights to survive but finds herself without allies. Tammy is voted out as the new power structure holds firm.",
      episodeAirDate: "2002-05-02",
      episodeBoot: "Tammy Leitner"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Tale of Two Cities",
      episodeSummary: "The final five strategize about who to take to the end. Robert DeCanio is voted out as the endgame begins.",
      episodeAirDate: "2002-05-05",
      episodeBoot: "Robert DeCanio"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Count Down",
      episodeSummary: "Sean Rector makes passionate speeches but cannot save himself in the game. Sean is voted out in fourth place.",
      episodeAirDate: "2002-05-09",
      episodeBoot: "Sean Rector"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Marquesas Retrospective",
      episodeSummary: "A look back at the historic Marquesas season and its groundbreaking power shift. The journey to the finale is examined.",
      episodeAirDate: "2002-05-12",
      episodeBoot: null
    },
    {
      episodeNumber: 14,
      episodeTitle: "The Sole Survivor",
      episodeSummary: "Kathy Vavrick-O'Brien is voted out after losing the final immunity challenge. Vecepia Towery defeats Neleh Dennis 4-3 to become the Sole Survivor.",
      episodeAirDate: "2002-05-19",
      episodeBoot: "Kathy Vavrick-O'Brien"
    }
  ],

  // Season 5: Thailand
  [
    {
      episodeNumber: 1,
      episodeTitle: "The Importance of Being Oldest",
      episodeSummary: "Sixteen castaways arrive in Thailand and are divided by a schoolyard pick into Chuay Gahn and Sook Jai. John Raymond is the first voted out after struggling to fit in with Sook Jai.",
      episodeAirDate: "2002-09-19",
      episodeBoot: "John Raymond"
    },
    {
      episodeNumber: 2,
      episodeTitle: "The Great Divide",
      episodeSummary: "The tribes settle into their camps and begin forming early alliances. Tanya Vance is voted out from Chuay Gahn due to persistent illness.",
      episodeAirDate: "2002-09-26",
      episodeBoot: "Tanya Vance"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Family Values",
      episodeSummary: "Jed's laziness and attitude cause friction at the Sook Jai camp. Jed Hildebrand is voted out for being a poor team player.",
      episodeAirDate: "2002-10-03",
      episodeBoot: "Jed Hildebrand"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Gender Bender",
      episodeSummary: "Ted and Ghandia's controversial incident creates major tension at Chuay Gahn. Ghandia Johnson is voted out after the conflict divides the tribe.",
      episodeAirDate: "2002-10-10",
      episodeBoot: "Ghandia Johnson"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Ocean's Surprise",
      episodeSummary: "The tribes face challenging conditions and dwindling food supplies. Stephanie Dill is voted out from Sook Jai.",
      episodeAirDate: "2002-10-17",
      episodeBoot: "Stephanie Dill"
    },
    {
      episodeNumber: 6,
      episodeTitle: "The Power of One",
      episodeSummary: "The tribes appear to merge but it's revealed to be a fake merge twist. Robb Zbacnik is voted out after the tribes separate again.",
      episodeAirDate: "2002-10-24",
      episodeBoot: "Robb Zbacnik"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Assumptions",
      episodeSummary: "The fake merge continues to confuse and frustrate the castaways. Shii Ann Huang is voted out for trying to flip to Chuay Gahn too early.",
      episodeAirDate: "2002-10-31",
      episodeBoot: "Shii Ann Huang"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Sleeping with the Enemy",
      episodeSummary: "The tribes finally merge for real into Chuay Jai with eight remaining. Erin Collins is the first post-merge boot as Chuay Gahn dominates.",
      episodeAirDate: "2002-11-07",
      episodeBoot: "Erin Collins"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Desperate Measures",
      episodeSummary: "The remaining Sook Jai members fight for survival against the Chuay Gahn majority. Ken Stafford is voted out as the systematic elimination continues.",
      episodeAirDate: "2002-11-14",
      episodeBoot: "Ken Stafford"
    },
    {
      episodeNumber: 10,
      episodeTitle: "While the Cats Are Away",
      episodeSummary: "Penny attempts to integrate with Chuay Gahn but fails to gain traction. Penny Ramsey is voted out as the Sook Jai decimation continues.",
      episodeAirDate: "2002-11-21",
      episodeBoot: "Penny Ramsey"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Big Surprise... and Another",
      episodeSummary: "Jake becomes the last remaining original Sook Jai member in the game. Jake Billingsley is voted out, completing the Sook Jai elimination.",
      episodeAirDate: "2002-11-28",
      episodeBoot: "Jake Billingsley"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Tides Are Turning",
      episodeSummary: "The final five Chuay Gahn members must turn on each other. Ted Rogers Jr. is voted out as Brian positions himself for the win.",
      episodeAirDate: "2002-12-05",
      episodeBoot: "Ted Rogers Jr."
    },
    {
      episodeNumber: 13,
      episodeTitle: "Slip Through Your Fingers",
      episodeSummary: "Helen Glover's straightforward approach puts her in jeopardy at final four. Helen is voted out after Brian wins immunity.",
      episodeAirDate: "2002-12-12",
      episodeBoot: "Helen Glover"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Jan Gentry is eliminated in third place at the final tribal council. Brian Heidik defeats Clay Jordan 4-3 in the closest jury vote to date.",
      episodeAirDate: "2002-12-19",
      episodeBoot: "Jan Gentry"
    }
  ],

  // Season 6: The Amazon
  [
    {
      episodeNumber: 1,
      episodeTitle: "Boys vs. Girls",
      episodeSummary: "For the first time, tribes are divided by gender with Tambaqui (men) and Jaburu (women). Ryan Aiken is the first voted out after Tambaqui loses immunity.",
      episodeAirDate: "2003-02-13",
      episodeBoot: "Ryan Aiken"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Storms",
      episodeSummary: "Both tribes struggle with the Amazon's harsh weather and difficult conditions. Janet Koth is voted out from Jaburu for her weaker challenge performance.",
      episodeAirDate: "2003-02-20",
      episodeBoot: "Janet Koth"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Girl Power",
      episodeSummary: "The women's tribe begins winning challenges and gaining confidence. Daniel Lue is voted out from Tambaqui after being seen as weak.",
      episodeAirDate: "2003-02-27",
      episodeBoot: "Daniel Lue"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Trapped",
      episodeSummary: "JoAnna's religious objections to challenge elements cause tension at Jaburu. JoAnna Ward is voted out for her inflexibility.",
      episodeAirDate: "2003-03-06",
      episodeBoot: "JoAnna Ward"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Pick-Up Sticks",
      episodeSummary: "A tribe swap shuffles the tribes, putting some players in new positions. Jeanne Hebert is voted out in the new Jaburu configuration.",
      episodeAirDate: "2003-03-13",
      episodeBoot: "Jeanne Hebert"
    },
    {
      episodeNumber: 6,
      episodeTitle: "More Than Meats the Eye",
      episodeSummary: "Roger's domineering personality makes him a target at Tambaqui. Roger Sexton is blindsided by the younger members of his tribe.",
      episodeAirDate: "2003-03-20",
      episodeBoot: "Roger Sexton"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Girls Gone Wilder",
      episodeSummary: "Dave and his alliance target Heidi but the plan backfires. Dave Johnson is voted out in a blindside.",
      episodeAirDate: "2003-03-27",
      episodeBoot: "Dave Johnson"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Sleeping with the Enemy",
      episodeSummary: "The tribes merge and the battle of the sexes reaches its climax. Deena Bennett is blindsided after being perceived as too strategic.",
      episodeAirDate: "2003-04-03",
      episodeBoot: "Deena Bennett"
    },
    {
      episodeNumber: 9,
      episodeTitle: "The Chain",
      episodeSummary: "Alex reveals the alliance's pecking order to Rob, sparking a counter-move. Alex Bell is blindsided after Rob flips the game.",
      episodeAirDate: "2003-04-10",
      episodeBoot: "Alex Bell"
    },
    {
      episodeNumber: 10,
      episodeTitle: "The Amazon Heats Up",
      episodeSummary: "Christy becomes a crucial swing vote between competing alliances. Christy Smith is voted out for being unpredictable.",
      episodeAirDate: "2003-04-17",
      episodeBoot: "Christy Smith"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Q and A",
      episodeSummary: "Heidi and Jenna strip for peanut butter in an infamous reward challenge moment. Heidi Strobel is voted out as the game nears its end.",
      episodeAirDate: "2003-04-24",
      episodeBoot: "Heidi Strobel"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Sour Grapes",
      episodeSummary: "Butch's fire-making accident destroys the camp in a memorable disaster. Butch Lockley is voted out at final four.",
      episodeAirDate: "2003-05-01",
      episodeBoot: "Butch Lockley"
    },
    {
      episodeNumber: 13,
      episodeTitle: "The Amazon Redux",
      episodeSummary: "A retrospective episode recaps the dramatic Amazon season. The journey to the finale is examined with behind-the-scenes footage.",
      episodeAirDate: "2003-05-04",
      episodeBoot: null
    },
    {
      episodeNumber: 14,
      episodeTitle: "And Then There Were Four",
      episodeSummary: "Rob Cesternino is voted out in third place after being seen as too strategic. Jenna Morasca defeats Matthew von Ertfelda 6-1 to become the Sole Survivor.",
      episodeAirDate: "2003-05-11",
      episodeBoot: "Rob Cesternino"
    }
  ],

  // Season 7: Pearl Islands
  [
    {
      episodeNumber: 1,
      episodeTitle: "Beg, Barter, Steal",
      episodeSummary: "Castaways are stranded in their street clothes and must barter for supplies in a village. Nicole Delma is voted out first from Morgan after a weak start.",
      episodeAirDate: "2003-09-18",
      episodeBoot: "Nicole Delma"
    },
    {
      episodeNumber: 2,
      episodeTitle: "To Quit or Not to Quit",
      episodeSummary: "Osten struggles with the conditions and considers quitting the game. Skinny Ryan is voted out from Morgan as the tribe continues to struggle.",
      episodeAirDate: "2003-09-25",
      episodeBoot: "Ryan Shoulders"
    },
    {
      episodeNumber: 3,
      episodeTitle: "United We Stand, Divided We...?",
      episodeSummary: "Sandra and Jon's rivalry intensifies at the Drake camp. Lillian Morris is voted out from Morgan for being seen as weak.",
      episodeAirDate: "2003-10-02",
      episodeBoot: "Lillian Morris"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Pick a Castaway... Any Castaway",
      episodeSummary: "Burton emerges as a strong competitor but also a strategic threat. Burton Roberts is blindsided by his own Drake tribe.",
      episodeAirDate: "2003-10-09",
      episodeBoot: "Burton Roberts"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Everyone's Hero",
      episodeSummary: "Rupert's popularity grows as he provides for the Drake tribe with his fishing skills. Michelle Tesauro is voted out from Morgan.",
      episodeAirDate: "2003-10-16",
      episodeBoot: "Michelle Tesauro"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Me and My Snake",
      episodeSummary: "Trish tries to orchestrate strategic moves at the Drake camp. Trish Dunn is voted out for her scheming ways.",
      episodeAirDate: "2003-10-23",
      episodeBoot: "Trish Dunn"
    },
    {
      episodeNumber: 7,
      episodeTitle: "What the...? (Part 1)",
      episodeSummary: "The Outcasts twist brings back eliminated players to compete for re-entry. Osten Taylor becomes the first person to ever quit Survivor at tribal council.",
      episodeAirDate: "2003-10-30",
      episodeBoot: "Osten Taylor (quit)"
    },
    {
      episodeNumber: 8,
      episodeTitle: "What the...? (Part 2)",
      episodeSummary: "Burton and Lillian return to the game via the Outcasts twist. Shawn Cohen is voted out in the double elimination episode.",
      episodeAirDate: "2003-10-30",
      episodeBoot: "Shawn Cohen"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Shocking! Simply Shocking!",
      episodeSummary: "The tribes merge and the returned Outcasts must navigate new dynamics. Andrew Savage is blindsided by Lill's flip to Drake.",
      episodeAirDate: "2003-11-06",
      episodeBoot: "Andrew Savage"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Swimming with Sharks",
      episodeSummary: "Jon's 'dead grandma' lie becomes one of Survivor's most notorious moments. Rupert Boneham is blindsided in a shocking vote.",
      episodeAirDate: "2003-11-13",
      episodeBoot: "Rupert Boneham"
    },
    {
      episodeNumber: 11,
      episodeTitle: "The Great Lie",
      episodeSummary: "The fallout from Jon's lies continues to affect the game dynamics. Tijuana Bradley is voted out as Burton and Jon's alliance dominates.",
      episodeAirDate: "2003-11-20",
      episodeBoot: "Tijuana Bradley"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Would You Be My Brutus Today?",
      episodeSummary: "Christa takes the blame for sabotaging the fish and becomes a target. Christa Hastie is voted out despite her innocence.",
      episodeAirDate: "2003-11-27",
      episodeBoot: "Christa Hastie"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Mutiny",
      episodeSummary: "The final five jockey for position as the end approaches. Burton is voted out again after Lill turns on him.",
      episodeAirDate: "2003-12-07",
      episodeBoot: "Burton Roberts"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Finale",
      episodeSummary: "Jon 'Fairplay' Heidik is voted out in a close final immunity challenge. Sandra Diaz-Twine defeats Lillian Morris 6-1 to become the Sole Survivor.",
      episodeAirDate: "2003-12-14",
      episodeBoot: "Jon Fairplay, Darrah Johnson"
    }
  ],

  // Season 8: All-Stars
  [
    {
      episodeNumber: 1,
      episodeTitle: "They're Back!",
      episodeSummary: "Eighteen returning players from previous seasons compete in the first all-star season. Tina Wesson becomes the first winner voted out in Survivor history.",
      episodeAirDate: "2004-02-01",
      episodeBoot: "Tina Wesson"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Panicked, Desperate, Thirsty as Hell",
      episodeSummary: "The Saboga tribe struggles with a brutal camp situation and loses again. Rudy Boesch is voted out after an injury impairs his mobility.",
      episodeAirDate: "2004-02-05",
      episodeBoot: "Rudy Boesch"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Shark Attack",
      episodeSummary: "Richard Hatch's inappropriate behavior causes controversy at Mogo Mogo. Richard is voted out for his antics with Sue during a challenge.",
      episodeAirDate: "2004-02-12",
      episodeBoot: "Richard Hatch"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Wipe Out!",
      episodeSummary: "Sue Hawk quits the game after emotional distress from the Richard Hatch incident. Her departure shocks the remaining castaways.",
      episodeAirDate: "2004-02-19",
      episodeBoot: "Susan Hawk (quit)"
    },
    {
      episodeNumber: 5,
      episodeTitle: "I've Been Bamboozled!",
      episodeSummary: "Rob Cesternino's strategic reputation makes him a threat to eliminate. Rob C. is blindsided in a memorable vote.",
      episodeAirDate: "2004-02-26",
      episodeBoot: "Rob Cesternino"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Outraged",
      episodeSummary: "The tribes are shuffled and new dynamics emerge. Jenna Lewis navigates the new tribal landscape successfully while Ethan Zohn struggles.",
      episodeAirDate: "2004-03-04",
      episodeBoot: "Ethan Zohn"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Sorry... I Blew It",
      episodeSummary: "Colby's challenge dominance from Australia doesn't translate to All-Stars. Colby Donaldson is voted out as the game intensifies.",
      episodeAirDate: "2004-03-11",
      episodeBoot: "Colby Donaldson"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Pick a Tribemate",
      episodeSummary: "Lex and Rob's pre-game alliance is tested when Rob asks for a favor. Lex keeps Amber safe per Rob's request.",
      episodeAirDate: "2004-03-18",
      episodeBoot: "Jerri Manthey"
    },
    {
      episodeNumber: 9,
      episodeTitle: "A Chapera Surprise",
      episodeSummary: "The tribes merge and Rob betrays Lex despite their pre-game deal. Lex van den Berghe is blindsided in an emotionally charged tribal council.",
      episodeAirDate: "2004-03-25",
      episodeBoot: "Lex van den Berghe"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Mad Scramble and Broken Hearts",
      episodeSummary: "Kathy tries to save herself but Rob and Amber's alliance is too strong. Kathy Vavrick-O'Brien is voted out.",
      episodeAirDate: "2004-04-01",
      episodeBoot: "Kathy Vavrick-O'Brien"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Stupid People, Stupid, Stupid People",
      episodeSummary: "Big Tom's loyalty to Rob doesn't save him from elimination. Alicia Calaway is voted out as Rob controls the game.",
      episodeAirDate: "2004-04-08",
      episodeBoot: "Alicia Calaway"
    },
    {
      episodeNumber: 12,
      episodeTitle: "A Thoughtful Gesture or a Deceptive Plan",
      episodeSummary: "Rob proposes to Amber during the loved ones visit in a surprise moment. Shii Ann Huang is voted out after her immunity streak ends.",
      episodeAirDate: "2004-04-22",
      episodeBoot: "Shii Ann Huang"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Stupid People... It's a Way of Life: A Clip Show",
      episodeSummary: "A retrospective episode looks back at the All-Stars season's memorable moments. The journey to the finale is recapped.",
      episodeAirDate: "2004-04-29",
      episodeBoot: null
    },
    {
      episodeNumber: 14,
      episodeTitle: "The Sole Surviving All-Star: The Reunion",
      episodeSummary: "Big Tom and Rupert are voted out in the finale episode. Rob Mariano proposes again and Amber Brkich wins 4-3, later accepting Rob's proposal on stage.",
      episodeAirDate: "2004-05-09",
      episodeBoot: "Tom Buchanan, Rupert Boneham, Jenna Lewis"
    }
  ],

  // Season 9: Vanuatu
  [
    {
      episodeNumber: 1,
      episodeTitle: "They Came at Us with Spears",
      episodeSummary: "Eighteen castaways are divided by gender into Lopevi (men) and Yasur (women) in Vanuatu. Brook Geraghty is the first voted out after the men lose immunity.",
      episodeAirDate: "2004-09-16",
      episodeBoot: "Brook Geraghty"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Burly Girls, Bowheads, Young Studs, and the Old Bunch",
      episodeSummary: "Both tribes begin to form alliances along age and personality lines. John Palyok is voted out from Lopevi.",
      episodeAirDate: "2004-09-23",
      episodeBoot: "John Palyok"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Double Tribal, Double Trouble",
      episodeSummary: "Both tribes must attend tribal council in a double elimination twist. Dolly Neely and Mia Galeotalanza are both voted out.",
      episodeAirDate: "2004-09-30",
      episodeBoot: "Dolly Neely, Mia Galeotalanza"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Now That's a Reward!",
      episodeSummary: "The tribes compete for valuable rewards while strategizing continues. John Kenney is voted out from Lopevi.",
      episodeAirDate: "2004-10-07",
      episodeBoot: "John Kenney"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Earthquakes and Shake-Ups!",
      episodeSummary: "A tribe swap reshuffles the game and creates new tribal dynamics. Brady Finta is voted out in the new configuration.",
      episodeAirDate: "2004-10-14",
      episodeBoot: "Brady Finta"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Hog Tied",
      episodeSummary: "Travis 'Bubba' Sampson tries to communicate with old allies across tribes. Bubba is caught and voted out for his transgression.",
      episodeAirDate: "2004-10-21",
      episodeBoot: "Travis Sampson"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Anger, Threats, Tears... and Coffee",
      episodeSummary: "Lisa Keiffer finds herself on the outs at the new Yasur tribe. Lisa is voted out as the women's alliance holds strong.",
      episodeAirDate: "2004-10-28",
      episodeBoot: "Lisa Keiffer"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Now the Battle Really Begins",
      episodeSummary: "The tribes merge into Alinta with the women holding a 6-4 advantage. Rory Freeman is the first post-merge boot.",
      episodeAirDate: "2004-11-04",
      episodeBoot: "Rory Freeman"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Secrets and Lies and an Idol Surprise",
      episodeSummary: "The women's alliance begins to crack as strategic maneuvering intensifies. Sarge Masters is voted out as the men continue to lose numbers.",
      episodeAirDate: "2004-11-11",
      episodeBoot: "Lea Masters"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Culture Shock and Violent Storms",
      episodeSummary: "Chad Crittenden's artificial leg doesn't slow his competitive spirit. Chad is voted out as Chris works to survive.",
      episodeAirDate: "2004-11-18",
      episodeBoot: "Chad Crittenden"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Surprise and... Surprise Again!",
      episodeSummary: "Eliza's constant talking annoys her tribemates but she survives. Leann Slaby is blindsided in a major power shift.",
      episodeAirDate: "2004-11-25",
      episodeBoot: "Leann Slaby"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Now Who's in Charge Here?!",
      episodeSummary: "The power structure collapses as Chris orchestrates moves from the bottom. Ami Cusack is blindsided as her alliance crumbles.",
      episodeAirDate: "2004-12-02",
      episodeBoot: "Ami Cusack"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Eruptions of Volcanic Magnitude",
      episodeSummary: "Julie Berry and Chris's flirtation affects the game dynamics. Julie is voted out at final five.",
      episodeAirDate: "2004-12-09",
      episodeBoot: "Julie Berry"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Eliza is voted out at final four and Scout at final three. Chris Daugherty defeats Twila Tanner 5-2 in an unlikely comeback victory.",
      episodeAirDate: "2004-12-12",
      episodeBoot: "Eliza Orlins, Scout Cloud Lee"
    }
  ],

  // Season 10: Palau
  [
    {
      episodeNumber: 1,
      episodeTitle: "This Has Never Happened Before!",
      episodeSummary: "Twenty castaways compete for tribal spots in a dramatic twist. Wanda Shirk and Jonathan Libby are eliminated before the game truly begins after not being picked.",
      episodeAirDate: "2005-02-17",
      episodeBoot: "Wanda Shirk, Jonathan Libby"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Love Is in the Air, Rats Are Everywhere",
      episodeSummary: "Koror dominates early challenges while Ulong struggles to compete. Jolanda Jones is voted out as Ulong's first casualty.",
      episodeAirDate: "2005-02-24",
      episodeBoot: "Jolanda Jones"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Dangerous Creatures and Horrible Setbacks",
      episodeSummary: "The tribes deal with wildlife and continue their fierce competition. Ashlee Ashby is voted out from the struggling Ulong tribe.",
      episodeAirDate: "2005-03-03",
      episodeBoot: "Ashlee Ashby"
    },
    {
      episodeNumber: 4,
      episodeTitle: "I Will Not Give Up",
      episodeSummary: "Jeff Wilson's injury threatens his game but he fights to stay. Jeff is voted out from Ulong despite his determination.",
      episodeAirDate: "2005-03-10",
      episodeBoot: "Jeff Wilson"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Best and Worst Reward Ever",
      episodeSummary: "Rewards bring both joy and strategic consequences for the tribes. Kim Mullen is voted out as Ulong continues to lose.",
      episodeAirDate: "2005-03-17",
      episodeBoot: "Kim Mullen"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Jellyfish 'n Chips",
      episodeSummary: "The tribes compete in memorable challenges involving local wildlife. Willard Smith is voted out from Koror in their first tribal council.",
      episodeAirDate: "2005-03-24",
      episodeBoot: "Willard Smith"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Great White Shark Hunter",
      episodeSummary: "Tom Westman's leadership strengthens Koror while Ulong disintegrates. Angie Jakusz is voted out from the decimated Ulong.",
      episodeAirDate: "2005-03-30",
      episodeBoot: "Angie Jakusz"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Neanderthal Man",
      episodeSummary: "James Miller and Bobby Jon's rivalry intensifies as Ulong shrinks. James is voted out, leaving three on Ulong.",
      episodeAirDate: "2005-04-06",
      episodeBoot: "James Miller"
    },
    {
      episodeNumber: 9,
      episodeTitle: "I Will Not Give Up",
      episodeSummary: "Ibrehem struggles but survives over Bobby Jon in a crucial vote. Bobby Jon Drinkard is voted out from Ulong.",
      episodeAirDate: "2005-04-13",
      episodeBoot: "Bobby Jon Drinkard"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Exile Island",
      episodeSummary: "Stephenie becomes the last remaining Ulong member in Survivor history. Ibrehem Rahman is voted out, leaving Stephenie alone.",
      episodeAirDate: "2005-04-20",
      episodeBoot: "Ibrehem Rahman"
    },
    {
      episodeNumber: 11,
      episodeTitle: "We'll Make You Pay",
      episodeSummary: "Stephenie joins Koror as the lone Ulong survivor facing a united tribe. Stephenie LaGrossa is finally voted out after her epic journey.",
      episodeAirDate: "2005-04-27",
      episodeBoot: "Stephenie LaGrossa"
    },
    {
      episodeNumber: 12,
      episodeTitle: "A Stirring Tale",
      episodeSummary: "Koror must finally turn on each other after dominating the pre-merge. Janu Tornell quits the game at tribal council.",
      episodeAirDate: "2005-05-01",
      episodeBoot: "Janu Tornell (quit)"
    },
    {
      episodeNumber: 13,
      episodeTitle: "It Could All Backfire",
      episodeSummary: "Strategic maneuvering intensifies as the final six fight for position. Coby Archa is voted out as threats are eliminated.",
      episodeAirDate: "2005-05-05",
      episodeBoot: "Coby Archa"
    },
    {
      episodeNumber: 14,
      episodeTitle: "The Ultimate Shock",
      episodeSummary: "Gregg and Jenn's showmance makes them targets. Gregg Carey is blindsided in a strategic move.",
      episodeAirDate: "2005-05-08",
      episodeBoot: "Gregg Carey"
    },
    {
      episodeNumber: 15,
      episodeTitle: "Reunion",
      episodeSummary: "Caryn, Jenn, and Ian are eliminated as Tom dominates the endgame. Tom Westman defeats Katie Gallagher 6-1 to become the Sole Survivor.",
      episodeAirDate: "2005-05-15",
      episodeBoot: "Caryn Groedel, Jennifer Lyon, Ian Rosenberger"
    }
  ],

  // Season 11: Guatemala
  [
    {
      episodeNumber: 1,
      episodeTitle: "Big Trek, Big Trouble, Big Surprise",
      episodeSummary: "Sixteen new players join returning players Stephenie and Bobby Jon in Guatemala's jungle. Jim Lynch is voted out first after struggling with the brutal 11-mile hike.",
      episodeAirDate: "2005-09-15",
      episodeBoot: "Jim Lynch"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Man Down",
      episodeSummary: "The physically demanding conditions take their toll on the castaways. Morgan McDevitt is voted out from Yaxha.",
      episodeAirDate: "2005-09-22",
      episodeBoot: "Morgan McDevitt"
    },
    {
      episodeNumber: 3,
      episodeTitle: "The Brave May Not Live Long, but the Cautious Don't Live at All",
      episodeSummary: "The hidden immunity idol is introduced to Survivor for the first time. Brianna Varela is voted out from Yaxha.",
      episodeAirDate: "2005-09-29",
      episodeBoot: "Brianna Varela"
    },
    {
      episodeNumber: 4,
      episodeTitle: "To Betray or Not to Betray",
      episodeSummary: "Alliances are tested as both tribes scheme and strategize. Brooke Struck is voted out from Nakum.",
      episodeAirDate: "2005-10-06",
      episodeBoot: "Brooke Struck"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Crocs, Cowboys and City Slickers",
      episodeSummary: "A tribe swap shakes up the game dynamics significantly. Blake Towsley is voted out after the swap.",
      episodeAirDate: "2005-10-13",
      episodeBoot: "Blake Towsley"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Big Ball, Big Mouth, Big Trouble",
      episodeSummary: "Margaret's conflict with Judd creates memorable tribal council drama. Margaret Bobonich is voted out amid controversy.",
      episodeAirDate: "2005-10-20",
      episodeBoot: "Margaret Bobonich"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Surprise Enemy Visit",
      episodeSummary: "The tribes receive unexpected visits that affect morale and strategy. Brian Corridan is voted out from Yaxha.",
      episodeAirDate: "2005-10-27",
      episodeBoot: "Brian Corridan"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Hidden Immunity Idol",
      episodeSummary: "Gary Hogeboom finds the first hidden immunity idol in Survivor history. Amy O'Hara is voted out as the game approaches the merge.",
      episodeAirDate: "2005-11-03",
      episodeBoot: "Amy O'Hara"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Secrets and Lies and an Idol Surprise",
      episodeSummary: "The tribes merge and Gary plays the first hidden immunity idol ever. Bobby Jon Drinkard is voted out in his second season.",
      episodeAirDate: "2005-11-10",
      episodeBoot: "Bobby Jon Drinkard"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Eating and Sleeping with the Enemy",
      episodeSummary: "The merged tribe deals with food scarcity and interpersonal conflicts. Brandon Bellinger is voted out.",
      episodeAirDate: "2005-11-17",
      episodeBoot: "Brandon Bellinger"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Everything Is Personal",
      episodeSummary: "Gary's NFL past is finally confirmed despite his denials throughout the season. Gary Hogeboom is voted out as his deception catches up with him.",
      episodeAirDate: "2005-11-24",
      episodeBoot: "Gary Hogeboom"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Price for Immunity",
      episodeSummary: "Judd's claims about the idol's location come under scrutiny. Jamie Newton is voted out in a blindside.",
      episodeAirDate: "2005-12-01",
      episodeBoot: "Jamie Newton"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Big Win, Big Decision, Big Mistake?",
      episodeSummary: "Judd's lies about the idol are exposed and he becomes a target. Judd Sergeant is blindsided with his 'scumbags' exit.",
      episodeAirDate: "2005-12-08",
      episodeBoot: "Judd Sergeant"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion: Guatemala: The Maya Empire",
      episodeSummary: "Cindy, Rafe, and Lydia are eliminated in the finale. Danni Boatwright defeats Stephenie LaGrossa 6-1 to become the Sole Survivor.",
      episodeAirDate: "2005-12-11",
      episodeBoot: "Cindy Hall, Rafe Judkins, Lydia Morales"
    }
  ],

  // Season 12: Panama
  [
    {
      episodeNumber: 1,
      episodeTitle: "The First Exile",
      episodeSummary: "Sixteen castaways are divided into four tribes by age and gender in Panama. Tina Scheer is voted out first from Casaya.",
      episodeAirDate: "2006-02-02",
      episodeBoot: "Tina Scheer"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Breakdown",
      episodeSummary: "The Exile Island twist sends the first castaway to isolation. Melinda Hyder is voted out from Casaya.",
      episodeAirDate: "2006-02-09",
      episodeBoot: "Melinda Hyder"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Crazy Fights, Snake Dinners",
      episodeSummary: "Shane's nicotine withdrawal causes erratic behavior at Casaya. Misty Giles is voted out from La Mina.",
      episodeAirDate: "2006-02-16",
      episodeBoot: "Misty Giles"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Starvation and Lunacy",
      episodeSummary: "The tribes are reshuffled into two tribes, creating new dynamics. Ruth Marie Milliman is voted out.",
      episodeAirDate: "2006-02-23",
      episodeBoot: "Ruth Marie Milliman"
    },
    {
      episodeNumber: 5,
      episodeTitle: "For Cod's Sake",
      episodeSummary: "Bobby's wine incident causes controversy at the Casaya camp. Bobby Mason is voted out for his selfish behavior.",
      episodeAirDate: "2006-03-02",
      episodeBoot: "Bobby Mason"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Salvation and Desertion",
      episodeSummary: "La Mina continues their losing streak while Casaya thrives despite dysfunction. Dan Barry is voted out from La Mina.",
      episodeAirDate: "2006-03-09",
      episodeBoot: "Dan Barry"
    },
    {
      episodeNumber: 7,
      episodeTitle: "An Emerging Plan",
      episodeSummary: "The tribes prepare for an expected merge while strategizing. Nick Stanbury is voted out as La Mina shrinks further.",
      episodeAirDate: "2006-03-22",
      episodeBoot: "Nick Stanbury"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Power of the Idol",
      episodeSummary: "The tribes merge and Terry's immunity idol becomes a major factor. Austin Carty is the first La Mina member voted out post-merge.",
      episodeAirDate: "2006-03-29",
      episodeBoot: "Austin Carty"
    },
    {
      episodeNumber: 9,
      episodeTitle: "The Nick of Time",
      episodeSummary: "Terry wins immunity again, protecting himself from the Casaya majority. Sally Schumann is voted out.",
      episodeAirDate: "2006-04-05",
      episodeBoot: "Sally Schumann"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Medical Emergency",
      episodeSummary: "Bruce suffers a severe medical emergency and is evacuated from the game. His evacuation changes the game dynamics.",
      episodeAirDate: "2006-04-12",
      episodeBoot: "Bruce Kanegai (evacuated)"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Perilous Scramble",
      episodeSummary: "With Bruce gone, the remaining players scramble for position. Courtney Marit is voted out in a close vote.",
      episodeAirDate: "2006-04-19",
      episodeBoot: "Courtney Marit"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Bamboozled",
      episodeSummary: "Shane's erratic behavior continues but his alliance holds firm. Shane Powers is voted out as his alliance turns on him.",
      episodeAirDate: "2006-04-26",
      episodeBoot: "Shane Powers"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Call of the Wild",
      episodeSummary: "Terry continues his immunity run in a dominant challenge performance. Cirie Fields orchestrates a major blindside against Courtney.",
      episodeAirDate: "2006-05-04",
      episodeBoot: "Terry Deitz"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Terry finally loses immunity and is voted out. Aras Baskauskas defeats Danielle DiLorenzo 5-2 to become the Sole Survivor.",
      episodeAirDate: "2006-05-14",
      episodeBoot: "Cirie Fields"
    }
  ],

  // Season 13: Cook Islands
  [
    {
      episodeNumber: 1,
      episodeTitle: "I Can Forgive Her But I Don't Have to Because She Screwed with My Chickens",
      episodeSummary: "Twenty castaways are controversially divided into tribes by ethnicity. Sekou Bunch is the first voted out from Manihiki.",
      episodeAirDate: "2006-09-14",
      episodeBoot: "Sekou Bunch"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Dire Strengths and Dead Weight",
      episodeSummary: "The ethnic tribes struggle with early challenges and dynamics. Billy Garcia is voted out after declaring love for Candice.",
      episodeAirDate: "2006-09-21",
      episodeBoot: "Billy Garcia"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Flirting and Frustration",
      episodeSummary: "Relationships and alliances begin forming across the tribes. Cecilia Mansilla is voted out from Aitutaki.",
      episodeAirDate: "2006-09-28",
      episodeBoot: "Cecilia Mansilla"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Ruling the Roost",
      episodeSummary: "The tribes are reshuffled and the ethnic theme is abandoned. J.P. Calderon is voted out in the new configuration.",
      episodeAirDate: "2006-10-05",
      episodeBoot: "J.P. Calderon"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Don't Cry Over Spilled Octopus",
      episodeSummary: "Challenges test the tribes' survival and teamwork skills. Stephannie Favor is voted out from Raro.",
      episodeAirDate: "2006-10-12",
      episodeBoot: "Stephannie Favor"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Plan Voodoo",
      episodeSummary: "Cao Boi's 'Plan Voodoo' introduces the split vote strategy to flush idols. Cristina Coria is voted out in a strategic move.",
      episodeAirDate: "2006-10-19",
      episodeBoot: "Cristina Coria"
    },
    {
      episodeNumber: 7,
      episodeTitle: "A Closer Look",
      episodeSummary: "A retrospective episode examines the controversial season thus far. Previously unseen footage provides new perspectives.",
      episodeAirDate: "2006-10-26",
      episodeBoot: null
    },
    {
      episodeNumber: 8,
      episodeTitle: "Why Aren't You Swimming?!",
      episodeSummary: "Candice and Jonathan mutiny from Aitu to Raro in a shocking move. Cao Boi Bui is voted out from the depleted Aitu.",
      episodeAirDate: "2006-11-02",
      episodeBoot: "Cao Boi Bui"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Mutiny",
      episodeSummary: "The Aitu Four of Yul, Ozzy, Becky and Sundra begin their underdog run. Flicka Smith is voted out as Aitu refuses to quit.",
      episodeAirDate: "2006-11-09",
      episodeBoot: "Jessica Smith"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Arranging a Hit",
      episodeSummary: "The tribes merge with Raro expecting to dominate the smaller Aitu. Brad Virata is voted out in a shocking blindside of Raro.",
      episodeAirDate: "2006-11-16",
      episodeBoot: "Brad Virata"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Why Would You Trust Me?",
      episodeSummary: "Yul's hidden immunity idol gives the Aitu Four incredible power. Rebecca Borman is voted out as Raro crumbles.",
      episodeAirDate: "2006-11-23",
      episodeBoot: "Rebecca Borman"
    },
    {
      episodeNumber: 12,
      episodeTitle: "You're a Rat...",
      episodeSummary: "Jonathan flips to join Aitu, sealing Raro's fate. Jenny Guzon-Bae is voted out as the Aitu Four dominates.",
      episodeAirDate: "2006-11-30",
      episodeBoot: "Jenny Guzon-Bae"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Parting Is Such Sweet Sorrow",
      episodeSummary: "Nate is voted out as the original Raro tribe is systematically eliminated. Jonathan is eliminated next.",
      episodeAirDate: "2006-12-07",
      episodeBoot: "Nate Gonzalez, Jonathan Penner"
    },
    {
      episodeNumber: 14,
      episodeTitle: "This Tribe Will Self-Destruct in 5... 4... 3...",
      episodeSummary: "Candice and Adam are voted out as the Aitu Four reaches the finale. Parvati Shallow is eliminated fourth.",
      episodeAirDate: "2006-12-14",
      episodeBoot: "Candice Woodcock, Adam Gentry, Parvati Shallow"
    },
    {
      episodeNumber: 15,
      episodeTitle: "Reunion",
      episodeSummary: "The first fire-making tiebreaker occurs between Sundra and Becky. Yul Kwon defeats Ozzy Lusth 5-4 to become the Sole Survivor.",
      episodeAirDate: "2006-12-17",
      episodeBoot: "Sundra Oakley, Becky Lee"
    }
  ],

  // Season 14: Fiji
  [
    {
      episodeNumber: 1,
      episodeTitle: "Something Cruel Is About to Happen... Real Soon",
      episodeSummary: "Nineteen castaways face a twist where one tribe gets luxury camp and the other gets nothing. Jessica deBen is voted out first from Ravu.",
      episodeAirDate: "2007-02-08",
      episodeBoot: "Jessica deBen"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Snakes Are Misunderstood... We Have an Understanding Now",
      episodeSummary: "The Have vs Have Not twist continues to affect tribal dynamics. Erica Durousseau is voted out from Ravu.",
      episodeAirDate: "2007-02-15",
      episodeBoot: "Erica Durousseau"
    },
    {
      episodeNumber: 3,
      episodeTitle: "This Isn't Survival... It's Thrival",
      episodeSummary: "Moto's luxury camp gives them significant advantages in challenges. Sylvia Kwan is voted out from Ravu.",
      episodeAirDate: "2007-02-22",
      episodeBoot: "Sylvia Kwan"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Let's Just Call Jeff on the Jeff Phone",
      episodeSummary: "Gary unexpectedly leaves the game due to personal reasons. Gary Stritesky leaves the game.",
      episodeAirDate: "2007-03-01",
      episodeBoot: "Gary Stritesky (quit)"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Strategist or the Loyalist?",
      episodeSummary: "A tribe swap mixes up the Have and Have Not dynamics. Liliana Gomez is voted out in the shuffle.",
      episodeAirDate: "2007-03-08",
      episodeBoot: "Liliana Gomez"
    },
    {
      episodeNumber: 6,
      episodeTitle: "I've Got Strength Now to Carry the Flag",
      episodeSummary: "The tribes continue battling with the camp disparity affecting morale. Anthony Robinson is voted out from Ravu.",
      episodeAirDate: "2007-03-21",
      episodeBoot: "Anthony Robinson"
    },
    {
      episodeNumber: 7,
      episodeTitle: "An Evil Thought",
      episodeSummary: "Rocky's aggressive personality creates tension at camp. Rocky Reid is voted out for his abrasive behavior.",
      episodeAirDate: "2007-03-28",
      episodeBoot: "Rocky Reid"
    },
    {
      episodeNumber: 8,
      episodeTitle: "So You Think You Can Meke?",
      episodeSummary: "The tribes merge and the Four Horsemen alliance emerges. Lisi Linares is voted out as alliances form.",
      episodeAirDate: "2007-04-04",
      episodeBoot: "Lisi Linares"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Are We Gonna Live on Exile Island?!",
      episodeSummary: "The Four Horsemen's plans begin to unravel. Michelle Yi is voted out in a controversial twist.",
      episodeAirDate: "2007-04-12",
      episodeBoot: "Michelle Yi"
    },
    {
      episodeNumber: 10,
      episodeTitle: "It's a Turtle?!",
      episodeSummary: "Edgardo's alliance faces unexpected opposition. Edgardo Rivera is blindsided in a major power shift.",
      episodeAirDate: "2007-04-19",
      episodeBoot: "Edgardo Rivera"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Smile, Velvet Gloves, and a Conditions of Conditions",
      episodeSummary: "Mookie and Alex scramble to survive without numbers. Mookie Lee is voted out as his alliance crumbles.",
      episodeAirDate: "2007-04-26",
      episodeBoot: "Mookie Lee"
    },
    {
      episodeNumber: 12,
      episodeTitle: "I Wanna See If I Can Make a Deal",
      episodeSummary: "Alex tries to cut deals to save himself from elimination. Alex Angarita is voted out despite his efforts.",
      episodeAirDate: "2007-05-03",
      episodeBoot: "Alex Angarita"
    },
    {
      episodeNumber: 13,
      episodeTitle: "You've Got a Puzzled Look",
      episodeSummary: "Dreamz's car deal with Yau-Man sets up a controversial finale moment. Stacy Kimball and Boo Bernis are eliminated.",
      episodeAirDate: "2007-05-10",
      episodeBoot: "Stacy Kimball, Boo Bernis"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Dreamz infamously breaks his deal with Yau-Man at final four. Earl Cole defeats Cassandra Franklin and Dreamz Herd 9-0-0 in the first unanimous jury vote.",
      episodeAirDate: "2007-05-13",
      episodeBoot: "Yau-Man Chan"
    }
  ],

  // Season 15: China
  [
    {
      episodeNumber: 1,
      episodeTitle: "A Chicken's a Little Bit Smarter",
      episodeSummary: "Sixteen castaways begin their journey at a Buddhist temple in China. Chicken Morris is the first voted out from Zhan Hu.",
      episodeAirDate: "2007-09-20",
      episodeBoot: "Chicken Morris"
    },
    {
      episodeNumber: 2,
      episodeTitle: "My Mom Is Going to Kill Me!",
      episodeSummary: "Ashley Massaro struggles with the physical demands of the game. Ashley is voted out from Zhan Hu.",
      episodeAirDate: "2007-09-27",
      episodeBoot: "Ashley Massaro"
    },
    {
      episodeNumber: 3,
      episodeTitle: "I Lost Two Hands and Possibly a Shoulder!",
      episodeSummary: "Leslie's religious beliefs create tension at the Fei Long camp. Leslie Nease is voted out in a strategic move.",
      episodeAirDate: "2007-10-04",
      episodeBoot: "Leslie Nease"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Ride the Workhorse Till the Tail Falls Off",
      episodeSummary: "Dave Cruser's leadership style alienates his Zhan Hu tribemates. Dave is voted out for being too bossy.",
      episodeAirDate: "2007-10-11",
      episodeBoot: "Dave Cruser"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Love Is in the Air",
      episodeSummary: "A tribe swap sends players to opposite camps in a kidnapping twist. Aaron Reisberger is thrown under the bus by his new tribe.",
      episodeAirDate: "2007-10-18",
      episodeBoot: "Aaron Reisberger"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Mama Said There'd Be Days Like This",
      episodeSummary: "Sherea's laziness makes her a target at the new Fei Long. Sherea Lloyd is voted out for not contributing.",
      episodeAirDate: "2007-10-25",
      episodeBoot: "Sherea Lloyd"
    },
    {
      episodeNumber: 7,
      episodeTitle: "I'm Not as Dumb as I Look",
      episodeSummary: "The tribes merge and James holds two hidden immunity idols. Jaime Dugan is voted out as alliances solidify.",
      episodeAirDate: "2007-11-01",
      episodeBoot: "Jaime Dugan"
    },
    {
      episodeNumber: 8,
      episodeTitle: "High School Friend Contest",
      episodeSummary: "Jean-Robert's poker strategy doesn't translate to Survivor success. Jean-Robert Bellande is blindsided.",
      episodeAirDate: "2007-11-08",
      episodeBoot: "Jean-Robert Bellande"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Just Don't Eat the Apple",
      episodeSummary: "Frosti's flirtation with Amanda puts him on the outs. Frosti Zernow is voted out.",
      episodeAirDate: "2007-11-15",
      episodeBoot: "Frosti Zernow"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Ready to Bite the Apple",
      episodeSummary: "James becomes the first person voted out with two idols in his pocket. His blindside is a legendary Survivor moment.",
      episodeAirDate: "2007-11-22",
      episodeBoot: "James Clement"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Going for the Oscar",
      episodeSummary: "Erik tries to make moves but finds himself without allies. Erik Huffman is voted out.",
      episodeAirDate: "2007-11-29",
      episodeBoot: "Erik Huffman"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Hello, I'm Still a Person!",
      episodeSummary: "Peih-Gee fights to survive as the last original Zhan Hu member. Peih-Gee Law is finally voted out.",
      episodeAirDate: "2007-12-06",
      episodeBoot: "Peih-Gee Law"
    },
    {
      episodeNumber: 13,
      episodeTitle: "A Slippery Little Sucker",
      episodeSummary: "Denise's lunch lady story creates sympathy from her tribemates. Denise Martin is voted out at final four.",
      episodeAirDate: "2007-12-13",
      episodeBoot: "Denise Martin"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Amanda becomes the first person to reach Day 39 twice consecutively. Todd Herzog defeats Courtney Yates and Amanda Kimmel 4-2-1 to become the Sole Survivor.",
      episodeAirDate: "2007-12-16",
      episodeBoot: "Amanda Kimmel, Courtney Yates"
    }
  ],

  // Season 16: Micronesia
  [
    {
      episodeNumber: 1,
      episodeTitle: "You Guys Are Dumb! It's a Double Episode",
      episodeSummary: "Ten returning 'Favorites' face ten new 'Fans' in a battle of experience vs enthusiasm. Fairplay quits in the first tribal council after lying about wanting to leave for his pregnant girlfriend.",
      episodeAirDate: "2008-02-07",
      episodeBoot: "Jonny Fairplay (quit)"
    },
    {
      episodeNumber: 2,
      episodeTitle: "The Sounds of Jungle Love",
      episodeSummary: "The Fans struggle to match the Favorites' experience and cohesion. Mary Sartain is voted out from the Fans tribe.",
      episodeAirDate: "2008-02-14",
      episodeBoot: "Mary Sartain"
    },
    {
      episodeNumber: 3,
      episodeTitle: "I Should Be Carried on the Chariot-Type Thing!",
      episodeSummary: "Chet's poor performance and Joel's frustration lead to conflict. Yau-Man Chan is voted out by the Favorites in a strategic move.",
      episodeAirDate: "2008-02-21",
      episodeBoot: "Yau-Man Chan"
    },
    {
      episodeNumber: 4,
      episodeTitle: "That's Baked, Barbecued and Fried!",
      episodeSummary: "The tribes swap members, mixing Fans and Favorites together. Mikey Bortone is voted out from the new Airai tribe.",
      episodeAirDate: "2008-02-28",
      episodeBoot: "Mikey Bortone"
    },
    {
      episodeNumber: 5,
      episodeTitle: "It Hit Everyone Pretty Hard",
      episodeSummary: "Jonathan Penner is medically evacuated due to a severe knee infection. His departure shocks both tribes.",
      episodeAirDate: "2008-03-06",
      episodeBoot: "Jonathan Penner (evacuated)"
    },
    {
      episodeNumber: 6,
      episodeTitle: "It's Like the Perfect Crime",
      episodeSummary: "Joel's aggressive challenge strategy backfires spectacularly. Chet Welch quits during tribal council.",
      episodeAirDate: "2008-03-13",
      episodeBoot: "Chet Welch (quit)"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Like a Wide-Eyed Kid in the Candy Store",
      episodeSummary: "Joel's physical game makes him a threat to his own tribe. Joel Anderson is voted out.",
      episodeAirDate: "2008-03-20",
      episodeBoot: "Joel Anderson"
    },
    {
      episodeNumber: 8,
      episodeTitle: "A Lost Puppy Dog",
      episodeSummary: "The tribes merge and the Black Widow Brigade alliance forms. Eliza Orlins is voted out after trying to play a fake idol.",
      episodeAirDate: "2008-03-27",
      episodeBoot: "Eliza Orlins"
    },
    {
      episodeNumber: 9,
      episodeTitle: "I'm in Such a Hot Pickle!",
      episodeSummary: "Ozzy's confidence leads to his spectacular blindside with an idol in his pocket. The Black Widow Brigade claims their first major victim.",
      episodeAirDate: "2008-04-03",
      episodeBoot: "Ozzy Lusth"
    },
    {
      episodeNumber: 10,
      episodeTitle: "I Promise...",
      episodeSummary: "Jason Siska is convinced to not play his idol through clever manipulation. Jason is blindsided after believing he was safe.",
      episodeAirDate: "2008-04-10",
      episodeBoot: "Jason Siska"
    },
    {
      episodeNumber: 11,
      episodeTitle: "It Was Like Christmas Morning!",
      episodeSummary: "The remaining men try to survive against the dominant women's alliance. James Clement is medically evacuated due to an infected finger.",
      episodeAirDate: "2008-04-17",
      episodeBoot: "James Clement (evacuated)"
    },
    {
      episodeNumber: 12,
      episodeTitle: "A Smile, Velvet Gloves, and a Conditions of War",
      episodeSummary: "Alexis Jones tries to maneuver within the women's alliance. Alexis is voted out as the alliance begins targeting its own.",
      episodeAirDate: "2008-04-24",
      episodeBoot: "Alexis Jones"
    },
    {
      episodeNumber: 13,
      episodeTitle: "If It Smells Like a Rat, Give It Cheese",
      episodeSummary: "Erik Reichenbach gives up individual immunity in one of Survivor's most infamous moments. Erik is immediately voted out after giving his necklace to Natalie.",
      episodeAirDate: "2008-05-01",
      episodeBoot: "Erik Reichenbach"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Cirie is eliminated in a shocking fire-making twist at final three. Parvati Shallow defeats Amanda Kimmel 5-3 to become the Sole Survivor.",
      episodeAirDate: "2008-05-11",
      episodeBoot: "Natalie Bolton, Cirie Fields"
    }
  ],

  // Season 17: Gabon
  [
    {
      episodeNumber: 1,
      episodeTitle: "Want to See the Elephant Dung?",
      episodeSummary: "Eighteen castaways arrive in Gabon and are divided by a schoolyard pick into Fang and Kota. Michelle Chase is the first voted out from Fang after the tribe loses immunity.",
      episodeAirDate: "2008-09-25",
      episodeBoot: "Michelle Chase"
    },
    {
      episodeNumber: 2,
      episodeTitle: "She Obviously Is Post-Op!",
      episodeSummary: "Gillian's eccentric behavior makes her a target at Fang. Gillian Larson is voted out for being the weakest link.",
      episodeAirDate: "2008-10-02",
      episodeBoot: "Gillian Larson"
    },
    {
      episodeNumber: 3,
      episodeTitle: "It Was Like Christmas Morning!",
      episodeSummary: "A tribe swap shakes up the game and changes dynamics significantly. Paloma Soto-Castillo is voted out from the new Kota.",
      episodeAirDate: "2008-10-09",
      episodeBoot: "Paloma Soto-Castillo"
    },
    {
      episodeNumber: 4,
      episodeTitle: "This Camp Is Cursed",
      episodeSummary: "Fang continues to struggle with their camp conditions and morale. Jacquie Berg is voted out as Fang's losing streak continues.",
      episodeAirDate: "2008-10-16",
      episodeBoot: "Jacquie Berg"
    },
    {
      episodeNumber: 5,
      episodeTitle: "He's a Snake, But He's My Snake",
      episodeSummary: "Strategic alliances form as players position themselves for the merge. GC Brown is voted out from Fang.",
      episodeAirDate: "2008-10-23",
      episodeBoot: "GC Brown"
    },
    {
      episodeNumber: 6,
      episodeTitle: "It All Depends on the Pin-Up Girl",
      episodeSummary: "Kelly becomes a swing vote between competing factions. Kelly Czarnecki is voted out from Fang.",
      episodeAirDate: "2008-10-30",
      episodeBoot: "Kelly Czarnecki"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Apple in the Garden of Eden",
      episodeSummary: "Another tribe swap further complicates alliances and loyalties. Ace Gordon is blindsided by Sugar's flip.",
      episodeAirDate: "2008-11-06",
      episodeBoot: "Ace Gordon"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Brains Behind Everything",
      episodeSummary: "Dan Kay struggles to find his footing in the chaotic game. Dan is voted out as threats are eliminated.",
      episodeAirDate: "2008-11-13",
      episodeBoot: "Dan Kay"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Nothing Tastes Better Than Five Hundred Dollars",
      episodeSummary: "The tribes merge and the game becomes individual competition. Marcus Lehman is blindsided in a shocking post-merge vote.",
      episodeAirDate: "2008-11-20",
      episodeBoot: "Marcus Lehman"
    },
    {
      episodeNumber: 10,
      episodeTitle: "I Was Put on the Planet for This Show",
      episodeSummary: "Charlie tries to recover from losing his closest ally Marcus. Charlie Herschel is voted out.",
      episodeAirDate: "2008-11-27",
      episodeBoot: "Charlie Herschel"
    },
    {
      episodeNumber: 11,
      episodeTitle: "The Good Guys Should Win in the End",
      episodeSummary: "Randy's abrasive personality finally catches up with him. Randy Bailey is blindsided after Sugar plays her idol on someone else to humiliate him.",
      episodeAirDate: "2008-12-04",
      episodeBoot: "Randy Bailey"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Good Things in Life Aren't Easy",
      episodeSummary: "Corinne fights to survive but lacks the numbers. Corinne Kaplan is voted out after a bitter battle.",
      episodeAirDate: "2008-12-07",
      episodeBoot: "Corinne Kaplan"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Say Goodbye to Gabon",
      episodeSummary: "Matty and Kenny battle for position in the finale. Crystal Cox and Ken Hoang are eliminated.",
      episodeAirDate: "2008-12-11",
      episodeBoot: "Crystal Cox, Ken Hoang"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Matty Whitmore is voted out at final four. Bob Crowley defeats Susie Smith and Sugar Kiper 4-3-0 to become the oldest Sole Survivor at 57.",
      episodeAirDate: "2008-12-14",
      episodeBoot: "Matty Whitmore"
    }
  ],

  // Season 18: Tocantins
  [
    {
      episodeNumber: 1,
      episodeTitle: "Let's Get Rid of the Weak Players Before We Even Start",
      episodeSummary: "Sixteen castaways trek through the Brazilian highlands to their camps. Carolina Eastwood is voted out first from Jalapao for being too bossy.",
      episodeAirDate: "2009-02-12",
      episodeBoot: "Carolina Eastwood"
    },
    {
      episodeNumber: 2,
      episodeTitle: "The Poison Apple Needs to Go",
      episodeSummary: "Coach Wade's eccentric stories and behavior emerge at Timbira. Candace Smith is voted out from Timbira.",
      episodeAirDate: "2009-02-19",
      episodeBoot: "Candace Smith"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Mama Said There'd Be Days Like This",
      episodeSummary: "Jerry struggles with illness and becomes a liability to Timbira. Jerry Sims is voted out due to his declining health.",
      episodeAirDate: "2009-02-26",
      episodeBoot: "Jerry Sims"
    },
    {
      episodeNumber: 4,
      episodeTitle: "The Strongest Man Alive",
      episodeSummary: "Tyson emerges as a challenge threat while Coach tells more elaborate stories. Sandy Burgin is voted out from Jalapao.",
      episodeAirDate: "2009-03-05",
      episodeBoot: "Sandy Burgin"
    },
    {
      episodeNumber: 5,
      episodeTitle: "You're Going to Want That Tooth",
      episodeSummary: "Spencer's young age and awkwardness make him a target. Spencer Duhm is voted out from Jalapao.",
      episodeAirDate: "2009-03-12",
      episodeBoot: "Spencer Duhm"
    },
    {
      episodeNumber: 6,
      episodeTitle: "One of Those Coach Moments",
      episodeSummary: "Coach's 'Dragonslayer' persona reaches new heights of absurdity. Sydney Wheeler is voted out from Jalapao.",
      episodeAirDate: "2009-03-19",
      episodeBoot: "Sydney Wheeler"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Dragon Slayer",
      episodeSummary: "The tribes merge and Brendan's alliance threatens the majority. Joe Dowdle is medically evacuated due to a severe leg infection.",
      episodeAirDate: "2009-03-25",
      episodeBoot: "Joe Dowdle (evacuated)"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Biggest Fraud in the Game",
      episodeSummary: "Brendan's leadership makes him a target at the merge. Brendan Synnott is blindsided in a strategic move.",
      episodeAirDate: "2009-04-02",
      episodeBoot: "Brendan Synnott"
    },
    {
      episodeNumber: 9,
      episodeTitle: "They Both Went Bananas",
      episodeSummary: "Sierra fights to survive against the dominant alliance. Sierra Reed is voted out despite her efforts.",
      episodeAirDate: "2009-04-09",
      episodeBoot: "Sierra Reed"
    },
    {
      episodeNumber: 10,
      episodeTitle: "It's Funny When People Cry",
      episodeSummary: "Tyson's arrogance and humor continue to entertain and annoy. Tyson Apostol is blindsided in a major move.",
      episodeAirDate: "2009-04-16",
      episodeBoot: "Tyson Apostol"
    },
    {
      episodeNumber: 11,
      episodeTitle: "The Martyr Approach",
      episodeSummary: "Coach volunteers to be voted out in a dramatic martyr moment. Coach Wade is eliminated after his theatrical exit.",
      episodeAirDate: "2009-04-23",
      episodeBoot: "Coach Wade"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Ultimate Sacrifice",
      episodeSummary: "Debbie's loyalty to Coach costs her in the game. Debbie Beebe is voted out.",
      episodeAirDate: "2009-04-30",
      episodeBoot: "Debbie Beebe"
    },
    {
      episodeNumber: 13,
      episodeTitle: "I Trust You, But I Trust Me More",
      episodeSummary: "The Jalapao Three must turn on each other at final four. Erinn Lobdell is voted out.",
      episodeAirDate: "2009-05-10",
      episodeBoot: "Erinn Lobdell"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "JT plays what many consider a perfect game with no votes against him. JT Thomas defeats Stephen Fishbach 7-0 to become the Sole Survivor.",
      episodeAirDate: "2009-05-17",
      episodeBoot: "Stephen Fishbach"
    }
  ],

  // Season 19: Samoa
  [
    {
      episodeNumber: 1,
      episodeTitle: "The Puppet Master",
      episodeSummary: "Twenty castaways arrive in Samoa as Russell Hantz begins his aggressive gameplay immediately. Marisa Calihan is voted out first from Foa Foa after clashing with Russell.",
      episodeAirDate: "2009-09-17",
      episodeBoot: "Marisa Calihan"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Taking Candy from a Baby",
      episodeSummary: "Russell sabotages his own tribe while finding hidden immunity idols. Mike Borassi is medically evacuated from Foa Foa.",
      episodeAirDate: "2009-09-24",
      episodeBoot: "Mike Borassi (evacuated)"
    },
    {
      episodeNumber: 3,
      episodeTitle: "It's Called a Russell Seed",
      episodeSummary: "Russell plants seeds of doubt throughout both tribes. Betsy Bolan is voted out from Foa Foa.",
      episodeAirDate: "2009-10-01",
      episodeBoot: "Betsy Bolan"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Hungry for a Win",
      episodeSummary: "Foa Foa desperately needs a win to avoid decimation. Ben Browning is voted out for his aggressive behavior.",
      episodeAirDate: "2009-10-08",
      episodeBoot: "Ben Browning"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Walking on Thin Ice",
      episodeSummary: "Yasmin tries to give advice to Foa Foa but it backfires. Yasmin Giles is voted out from Galu in a surprise.",
      episodeAirDate: "2009-10-15",
      episodeBoot: "Yasmin Giles"
    },
    {
      episodeNumber: 6,
      episodeTitle: "This Is the Man Test",
      episodeSummary: "Ashley's lack of effort in challenges makes her a target. Ashley Trainer is voted out from Foa Foa.",
      episodeAirDate: "2009-10-22",
      episodeBoot: "Ashley Trainer"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Houdini Magic",
      episodeSummary: "Russell plays his idol correctly in a dramatic tribal council. Liz Kim is voted out as Foa Foa continues to shrink.",
      episodeAirDate: "2009-10-29",
      episodeBoot: "Liz Kim"
    },
    {
      episodeNumber: 8,
      episodeTitle: "All Hell Breaks Loose",
      episodeSummary: "The tribes merge with Galu holding an 8-4 advantage over Foa Foa. Erik Cardona is blindsided after Russell flips the game.",
      episodeAirDate: "2009-11-05",
      episodeBoot: "Erik Cardona"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Tastes Like Chicken",
      episodeSummary: "Russell continues to find idols and control the game. Kelly Sharbaugh is voted out as Galu crumbles.",
      episodeAirDate: "2009-11-12",
      episodeBoot: "Kelly Sharbaugh"
    },
    {
      episodeNumber: 10,
      episodeTitle: "The Day of Reckoning",
      episodeSummary: "Laura Morett wins immunity but remains a target. Laura is finally voted out when she loses immunity.",
      episodeAirDate: "2009-11-19",
      episodeBoot: "Laura Morett"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Off with Their Heads!",
      episodeSummary: "John flips to join Foa Foa, sealing Galu's fate. John Fincher is voted out soon after.",
      episodeAirDate: "2009-11-26",
      episodeBoot: "John Fincher"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Damage Control",
      episodeSummary: "Dave and Monica try to survive against the Foa Foa majority. Dave Ball is voted out.",
      episodeAirDate: "2009-12-03",
      episodeBoot: "Dave Ball"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Two Brains Are Better Than One",
      episodeSummary: "Monica and Shambo fight to stay in the game. Monica Padilla and Shambo Waters are eliminated.",
      episodeAirDate: "2009-12-10",
      episodeBoot: "Monica Padilla, Shambo Waters"
    },
    {
      episodeNumber: 14,
      episodeTitle: "This Game Ain't Over",
      episodeSummary: "Jaison and Brett are voted out in the finale. Russell shockingly loses to Natalie White 7-2-0 in a controversial jury vote.",
      episodeAirDate: "2009-12-20",
      episodeBoot: "Jaison Robinson, Brett Clouser"
    }
  ],

  // Season 20: Heroes vs. Villains
  [
    {
      episodeNumber: 1,
      episodeTitle: "Slay Everyone, Trust No One",
      episodeSummary: "Twenty returning players are divided into Heroes and Villains tribes. Stephenie LaGrossa is voted out first from the Heroes after a challenge injury.",
      episodeAirDate: "2010-02-11",
      episodeBoot: "Stephenie LaGrossa"
    },
    {
      episodeNumber: 2,
      episodeTitle: "It's Getting the Best of Me",
      episodeSummary: "Randy's negativity makes him an easy target on the Villains tribe. Randy Bailey is voted out as the Villains streamline.",
      episodeAirDate: "2010-02-18",
      episodeBoot: "Randy Bailey"
    },
    {
      episodeNumber: 3,
      episodeTitle: "That Girl Is Like a Virus",
      episodeSummary: "Parvati's presence threatens Rob's control of the Villains. Cirie Fields is voted out from the Heroes.",
      episodeAirDate: "2010-02-25",
      episodeBoot: "Cirie Fields"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Tonight, We Make Our Move",
      episodeSummary: "Tyson makes a fatal error by switching his vote against Rob's plan. Tyson Apostol is blindsided after voting himself out due to Russell's manipulation.",
      episodeAirDate: "2010-03-04",
      episodeBoot: "Tyson Apostol"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Knights of the Round Table",
      episodeSummary: "Boston Rob and Russell's war for control of the Villains intensifies. James Clement is medically evacuated due to his injured leg.",
      episodeAirDate: "2010-03-11",
      episodeBoot: "James Clement (evacuated)"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Banana Etiquette",
      episodeSummary: "Tom Westman fights to survive on the Heroes tribe. Tom is voted out as JT takes control of the Heroes.",
      episodeAirDate: "2010-03-18",
      episodeBoot: "Tom Westman"
    },
    {
      episodeNumber: 7,
      episodeTitle: "I'm Not a Good Villain",
      episodeSummary: "Rob's alliance crumbles as Russell gains power on the Villains. Boston Rob is blindsided in a shocking vote.",
      episodeAirDate: "2010-03-25",
      episodeBoot: "Rob Mariano"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Expectations",
      episodeSummary: "Coach struggles with his loyalty between Rob and Russell. Coach Wade is voted out after failing to pick a side.",
      episodeAirDate: "2010-04-01",
      episodeBoot: "Coach Wade"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Survivor History",
      episodeSummary: "JT gives Russell his hidden immunity idol in one of the worst moves ever. Courtney Yates is voted out as the merge approaches.",
      episodeAirDate: "2010-04-08",
      episodeBoot: "Courtney Yates"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Going Down in Flames",
      episodeSummary: "The tribes merge and Russell uses JT's idol against the Heroes. JT Thomas is blindsided by his own idol.",
      episodeAirDate: "2010-04-15",
      episodeBoot: "JT Thomas"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Jumping Ship",
      episodeSummary: "Candice flips to the Villains, dooming the Heroes. Amanda Kimmel is voted out.",
      episodeAirDate: "2010-04-22",
      episodeBoot: "Amanda Kimmel"
    },
    {
      episodeNumber: 12,
      episodeTitle: "A Sinking Ship",
      episodeSummary: "The remaining Heroes fight for survival against the Villains majority. Candice Woodcock is voted out after her flip fails.",
      episodeAirDate: "2010-04-29",
      episodeBoot: "Candice Woodcock"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Loose Lips Sink Ships",
      episodeSummary: "Danielle breaks down at tribal council during a tense confrontation. Danielle DiLorenzo is voted out as Russell turns on his allies.",
      episodeAirDate: "2010-05-06",
      episodeBoot: "Danielle DiLorenzo"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Anything Could Happen",
      episodeSummary: "Rupert and Colby are eliminated as the Villains dominate. Jerri is voted out at final four.",
      episodeAirDate: "2010-05-09",
      episodeBoot: "Rupert Boneham, Colby Donaldson, Jerri Manthey"
    },
    {
      episodeNumber: 15,
      episodeTitle: "Reunion",
      episodeSummary: "Russell loses again in a dominant social game by Sandra. Sandra Diaz-Twine defeats Parvati Shallow and Russell Hantz 6-3-0 to become the first two-time Sole Survivor.",
      episodeAirDate: "2010-05-16",
      episodeBoot: null
    }
  ],

  // Season 21: Nicaragua
  [
    {
      episodeNumber: 1,
      episodeTitle: "Young at Heart",
      episodeSummary: "Twenty castaways are divided by age into La Flor (young) and Espada (old) tribes. Wendy DeSmidt-Kohlhoff is voted out first from Espada for her erratic behavior.",
      episodeAirDate: "2010-09-15",
      episodeBoot: "Wendy DeSmidt-Kohlhoff"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Fatigue Makes Cowards of Us All",
      episodeSummary: "The Medallion of Power creates strategic decisions for both tribes. Shannon Elkins is voted out from La Flor after a disastrous tribal council.",
      episodeAirDate: "2010-09-22",
      episodeBoot: "Shannon Elkins"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Glitter in Their Eyes",
      episodeSummary: "Jimmy Johnson's celebrity status makes him both an asset and a target. Jimmy Johnson is voted out from Espada.",
      episodeAirDate: "2010-09-29",
      episodeBoot: "Jimmy Johnson"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Pulling the Trigger",
      episodeSummary: "Jimmy T's desire for leadership creates conflict at Espada. Jimmy Tarantino is voted out for being too demanding.",
      episodeAirDate: "2010-10-06",
      episodeBoot: "Jimmy Tarantino"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Turf Wars",
      episodeSummary: "A tribe swap mixes young and old players together. Tyrone Davis is voted out from the new Espada.",
      episodeAirDate: "2010-10-13",
      episodeBoot: "Tyrone Davis"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Worst Case Scenario",
      episodeSummary: "Kelly B's prosthetic leg makes her both sympathetic and a threat. Kelly Bruno is voted out from La Flor.",
      episodeAirDate: "2010-10-20",
      episodeBoot: "Kelly Bruno"
    },
    {
      episodeNumber: 7,
      episodeTitle: "What Goes Around, Comes Around",
      episodeSummary: "Yve's strategic mind makes her a target at Espada. Yve Rojas is voted out.",
      episodeAirDate: "2010-10-27",
      episodeBoot: "Yve Rojas"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Company Will Be Arriving Soon",
      episodeSummary: "Jill's alliance with Marty puts her in the minority. Jill Behm is voted out from La Flor.",
      episodeAirDate: "2010-11-03",
      episodeBoot: "Jill Behm"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Running the Camp",
      episodeSummary: "The tribes merge and the game becomes individual. Alina Wilson is voted out as the first merged boot.",
      episodeAirDate: "2010-11-10",
      episodeBoot: "Alina Wilson"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Stuck in the Middle",
      episodeSummary: "Marty's aggressive gameplay finally catches up to him. Marty Piombo is voted out.",
      episodeAirDate: "2010-11-17",
      episodeBoot: "Marty Piombo"
    },
    {
      episodeNumber: 11,
      episodeTitle: "We Did It Guys",
      episodeSummary: "Brenda's strategic control makes her the biggest threat. Brenda Lowe is blindsided in a major move.",
      episodeAirDate: "2010-11-24",
      episodeBoot: "Brenda Lowe"
    },
    {
      episodeNumber: 12,
      episodeTitle: "You Started, You're Finishing",
      episodeSummary: "NaOnka and Kelly Purple both quit the game in an unprecedented moment. Their quits shock the remaining players.",
      episodeAirDate: "2010-12-01",
      episodeBoot: "NaOnka Mixon (quit), Kelly Shinn (quit)"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Not Sure Where I Stand",
      episodeSummary: "Benry's physical threat level makes him a target. Benry Henry is voted out.",
      episodeAirDate: "2010-12-08",
      episodeBoot: "Benry Henry"
    },
    {
      episodeNumber: 14,
      episodeTitle: "What About Me?",
      episodeSummary: "Dan, Holly, and Chase are eliminated in the finale. Fabio (Jud Birza) defeats Chase Rice and Sash Lenahan 5-4-0 to become the Sole Survivor.",
      episodeAirDate: "2010-12-19",
      episodeBoot: "Dan Lembo, Holly Hoffman, Chase Rice"
    }
  ],

  // Season 22: Redemption Island
  [
    {
      episodeNumber: 1,
      episodeTitle: "You're Looking at the New Leader of Your Tribe",
      episodeSummary: "Boston Rob and Russell Hantz return to lead tribes of new players. Francesca Hogi becomes the first person sent to Redemption Island.",
      episodeAirDate: "2011-02-16",
      episodeBoot: "Francesca Hogi"
    },
    {
      episodeNumber: 2,
      episodeTitle: "You Own My Vote",
      episodeSummary: "Russell's tribe quickly tires of his aggressive tactics. Matt Elrod is blindsided by Rob's alliance and sent to Redemption Island.",
      episodeAirDate: "2011-02-23",
      episodeBoot: "Matt Elrod"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Keep Hope Alive",
      episodeSummary: "Russell's game implodes as his tribe turns against him. Russell Hantz is voted out and sent to Redemption Island.",
      episodeAirDate: "2011-03-02",
      episodeBoot: "Russell Hantz"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Don't You Work for Me?",
      episodeSummary: "Kristina tries to work with Rob but fails to gain traction. Kristina Kell is sent to Redemption Island.",
      episodeAirDate: "2011-03-09",
      episodeBoot: "Kristina Kell"
    },
    {
      episodeNumber: 5,
      episodeTitle: "We Hate Our Tribe",
      episodeSummary: "Zapatera continues to lose challenges after throwing one to eliminate Russell. Stephanie Valencia is sent to Redemption Island.",
      episodeAirDate: "2011-03-16",
      episodeBoot: "Stephanie Valencia"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Their Red-Headed Stepchild",
      episodeSummary: "Sarita's weakness in challenges makes her a liability. Krista Klumpp is sent to Redemption Island.",
      episodeAirDate: "2011-03-23",
      episodeBoot: "Krista Klumpp"
    },
    {
      episodeNumber: 7,
      episodeTitle: "It Don't Take a Smart One",
      episodeSummary: "Sarita and David clash over who should be eliminated. Sarita White is sent to Redemption Island.",
      episodeAirDate: "2011-03-30",
      episodeBoot: "Sarita White"
    },
    {
      episodeNumber: 8,
      episodeTitle: "This Game Respects Big Moves",
      episodeSummary: "Matt returns from Redemption Island but is immediately blindsided again. Matt Elrod is sent back to Redemption Island.",
      episodeAirDate: "2011-04-06",
      episodeBoot: "Matt Elrod"
    },
    {
      episodeNumber: 9,
      episodeTitle: "The Buddy System",
      episodeSummary: "Rob implements his 'buddy system' to control his alliance. Mike Chiesl is sent to Redemption Island.",
      episodeAirDate: "2011-04-13",
      episodeBoot: "Mike Chiesl"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Rice Wars",
      episodeSummary: "David's strategic mind makes him a target. David Murphy is sent to Redemption Island.",
      episodeAirDate: "2011-04-20",
      episodeBoot: "David Murphy"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Mystery Package",
      episodeSummary: "Julie steals Phillip's shorts in a petty move. Julie Wolfe is sent to Redemption Island.",
      episodeAirDate: "2011-04-27",
      episodeBoot: "Julie Wolfe"
    },
    {
      episodeNumber: 12,
      episodeTitle: "You Mangled My Nets",
      episodeSummary: "Steve and Phillip have a heated confrontation at camp. Steve Wright is sent to Redemption Island.",
      episodeAirDate: "2011-05-04",
      episodeBoot: "Steve Wright"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Too Close for Comfort",
      episodeSummary: "Andrea returns from Redemption Island, and Ralph, Grant are eliminated. Ashley Underwood is voted out.",
      episodeAirDate: "2011-05-08",
      episodeBoot: "Ralph Kiser, Grant Mattos, Andrea Boehlke, Ashley Underwood"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Boston Rob dominates the game from start to finish. Rob Mariano defeats Phillip Sheppard and Natalie Tenerelli 8-1-0 to finally become the Sole Survivor on his fourth attempt.",
      episodeAirDate: "2011-05-15",
      episodeBoot: null
    }
  ],

  // Season 23: South Pacific
  [
    {
      episodeNumber: 1,
      episodeTitle: "I Need Redemption",
      episodeSummary: "Coach and Ozzy return to lead tribes of new players in another Redemption Island season. Semhar Tadesse is voted out first from Savaii.",
      episodeAirDate: "2011-09-14",
      episodeBoot: "Semhar Tadesse"
    },
    {
      episodeNumber: 2,
      episodeTitle: "He Has Demons",
      episodeSummary: "Brandon Hantz struggles with his uncle Russell's legacy. Christine Shields Markoski is voted out from Upolu.",
      episodeAirDate: "2011-09-21",
      episodeBoot: "Christine Shields Markoski"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Reap What You Sow",
      episodeSummary: "Papa Bear's scrambling fails to save him from elimination. Mark Caruso is voted out from Savaii.",
      episodeAirDate: "2011-09-28",
      episodeBoot: "Mark Caruso"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Survivalism",
      episodeSummary: "Stacey exposes Coach's alliance after being eliminated. Stacey Powell is voted out from Upolu.",
      episodeAirDate: "2011-10-05",
      episodeBoot: "Stacey Powell"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Taste the Victory",
      episodeSummary: "Elyse's closeness with Ozzy makes her a target. Elyse Umemoto is voted out from Savaii.",
      episodeAirDate: "2011-10-12",
      episodeBoot: "Elyse Umemoto"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Free Agent",
      episodeSummary: "Mikayla's strength becomes threatening to her tribe. Mikayla Wingle is voted out from Upolu.",
      episodeAirDate: "2011-10-19",
      episodeBoot: "Mikayla Wingle"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Trojan Horse",
      episodeSummary: "The tribes prepare for the merge with strategic positioning. Ozzy volunteers to go to Redemption Island as a bold move.",
      episodeAirDate: "2011-10-26",
      episodeBoot: "Ozzy Lusth"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Double Agent",
      episodeSummary: "The tribes merge and Cochran becomes a crucial swing vote. Keith Tollefson is voted out after the merge.",
      episodeAirDate: "2011-11-02",
      episodeBoot: "Keith Tollefson"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Cut Throat",
      episodeSummary: "Cochran flips to Upolu in one of the most controversial moves in Survivor history. Jim Rice is voted out as Savaii crumbles.",
      episodeAirDate: "2011-11-09",
      episodeBoot: "Jim Rice"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Running the Show",
      episodeSummary: "Dawn fights to survive after Cochran's betrayal. Dawn Meehan is voted out.",
      episodeAirDate: "2011-11-16",
      episodeBoot: "Dawn Meehan"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Closer Look",
      episodeSummary: "A retrospective episode examines the season's key moments. Whitney Duncan is eliminated.",
      episodeAirDate: "2011-11-23",
      episodeBoot: "Whitney Duncan"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Then There Were Five",
      episodeSummary: "Cochran's usefulness expires for the Upolu alliance. John Cochran is voted out for his flip.",
      episodeAirDate: "2011-11-30",
      episodeBoot: "John Cochran"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Cult Like",
      episodeSummary: "Brandon's erratic behavior concerns his alliance. Edna Ma is voted out.",
      episodeAirDate: "2011-12-07",
      episodeBoot: "Edna Ma"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Loyalties Will Be Broken",
      episodeSummary: "Ozzy returns from Redemption Island for the final challenge. Brandon, Rick, and Ozzy are eliminated.",
      episodeAirDate: "2011-12-14",
      episodeBoot: "Brandon Hantz, Rick Nelson, Ozzy Lusth"
    },
    {
      episodeNumber: 15,
      episodeTitle: "Reunion",
      episodeSummary: "Coach's religious manipulation of his tribe backfires with the jury. Sophie Clarke defeats Coach Wade and Albert Destrade 6-3-0 to become the Sole Survivor.",
      episodeAirDate: "2011-12-18",
      episodeBoot: null
    }
  ],

  // Season 24: One World
  [
    {
      episodeNumber: 1,
      episodeTitle: "Two Tribes, One Camp, No Rules",
      episodeSummary: "Men and women live together on one beach but compete as separate tribes. Kourtney Moon is medically evacuated from Salani after a wrist injury.",
      episodeAirDate: "2012-02-15",
      episodeBoot: "Kourtney Moon (evacuated)"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Total Dysfunction",
      episodeSummary: "Colton emerges as a villain on the men's tribe with his hidden idol. Nina Acosta is voted out from Salani.",
      episodeAirDate: "2012-02-22",
      episodeBoot: "Nina Acosta"
    },
    {
      episodeNumber: 3,
      episodeTitle: "One World Is Out the Window",
      episodeSummary: "The men win immunity but Colton convinces them to go to tribal anyway. Matt Quinlan is blindsided by Colton's alliance.",
      episodeAirDate: "2012-02-29",
      episodeBoot: "Matt Quinlan"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Bum-Puzzled",
      episodeSummary: "Bill and Colton clash in a racially charged confrontation. Bill Posley is voted out after the men give up immunity again.",
      episodeAirDate: "2012-03-07",
      episodeBoot: "Bill Posley"
    },
    {
      episodeNumber: 5,
      episodeTitle: "A Bunch of Idiots",
      episodeSummary: "A tribe swap puts Colton with the women temporarily. Monica Culpepper is voted out from the new Salani.",
      episodeAirDate: "2012-03-14",
      episodeBoot: "Monica Culpepper"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Thanks for the Souvenir",
      episodeSummary: "Colton is medically evacuated with appendicitis and takes his idol with him. His evacuation changes the game dynamics.",
      episodeAirDate: "2012-03-21",
      episodeBoot: "Colton Cumbie (evacuated)"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Beauty in a Merge",
      episodeSummary: "The tribes merge and Kim takes control of the game. Jonas Otsuji is voted out as Kim's alliance dominates.",
      episodeAirDate: "2012-03-28",
      episodeBoot: "Jonas Otsuji"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Just Annihilate Them",
      episodeSummary: "Michael tries to rally the men but fails. Michael Jefferson is voted out.",
      episodeAirDate: "2012-04-04",
      episodeBoot: "Michael Jefferson"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Go Out with a Bang",
      episodeSummary: "Jay realizes too late that Kim has been playing him. Jay Byars is blindsided.",
      episodeAirDate: "2012-04-11",
      episodeBoot: "Jay Byars"
    },
    {
      episodeNumber: 10,
      episodeTitle: "I'm No Dummy",
      episodeSummary: "Leif's lack of strategic awareness makes him an easy target. Leif Manson is voted out.",
      episodeAirDate: "2012-04-18",
      episodeBoot: "Leif Manson"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Never Say Die",
      episodeSummary: "Troyzan fights for his survival but can't overcome Kim's alliance. Troyzan Robertson is voted out despite winning immunity.",
      episodeAirDate: "2012-04-25",
      episodeBoot: "Troyzan Robertson"
    },
    {
      episodeNumber: 12,
      episodeTitle: "It's Gonna Be Chaos",
      episodeSummary: "Kat's blindside shocks her as Kim's game continues. Kat Edorsson is blindsided.",
      episodeAirDate: "2012-05-02",
      episodeBoot: "Kat Edorsson"
    },
    {
      episodeNumber: 13,
      episodeTitle: "It's Human Nature",
      episodeSummary: "Tarzan and Alicia are voted out as Kim steamrolls to victory. Christina Cha is eliminated at final four.",
      episodeAirDate: "2012-05-09",
      episodeBoot: "Tarzan Smith, Alicia Rosa, Christina Cha"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Kim Spradlin plays one of the most dominant games in Survivor history. Kim defeats Chelsea Meissner and Sabrina Thompson 7-2-0 to become the Sole Survivor.",
      episodeAirDate: "2012-05-13",
      episodeBoot: null
    }
  ],

  // Season 25: Philippines
  [
    {
      episodeNumber: 1,
      episodeTitle: "Survivor Smacked Me in the Chops",
      episodeSummary: "Three medically evacuated players return with tribes of new players. Zane Knight is voted out first from Matsing after asking to be eliminated.",
      episodeAirDate: "2012-09-19",
      episodeBoot: "Zane Knight"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Don't Be Blinded by the Headlights",
      episodeSummary: "Matsing continues their losing streak while Russell struggles. Roxanne Morris is voted out from Matsing.",
      episodeAirDate: "2012-09-26",
      episodeBoot: "Roxanne Morris"
    },
    {
      episodeNumber: 3,
      episodeTitle: "This Isn't a 'We' Game",
      episodeSummary: "Angie and Malcolm's closeness threatens Matsing's cohesion. Angie Layton is voted out from the decimated Matsing.",
      episodeAirDate: "2012-10-03",
      episodeBoot: "Angie Layton"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Create a Little Chaos",
      episodeSummary: "Russell Swan's leadership is questioned as Matsing loses again. Russell Swan is voted out in his second failed attempt.",
      episodeAirDate: "2012-10-10",
      episodeBoot: "Russell Swan"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Got My Swag Back",
      episodeSummary: "Matsing is dissolved with Malcolm and Denise joining other tribes. Dana Lambert is medically evacuated from Kalabaw.",
      episodeAirDate: "2012-10-17",
      episodeBoot: "Dana Lambert (evacuated)"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Down and Dirty",
      episodeSummary: "Dawson's flirtation with Jeff Probst becomes a memorable moment. Dawson is voted out from Kalabaw.",
      episodeAirDate: "2012-10-24",
      episodeBoot: "Sarah Dawson"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Not the Only Actor on This Island",
      episodeSummary: "Katie struggles to fit in with her new tribe after the dissolution. Katie Hanson is voted out from Kalabaw.",
      episodeAirDate: "2012-10-31",
      episodeBoot: "Katie Hanson"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Dead Man Walking",
      episodeSummary: "The tribes merge and Jeff Kent becomes a target. Jeff Kent is blindsided in a classic vote split.",
      episodeAirDate: "2012-11-07",
      episodeBoot: "Jeff Kent"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Little Miss Perfect",
      episodeSummary: "RC's conflict with Abi escalates after the merge. Artis Silvester is voted out as alliances shift.",
      episodeAirDate: "2012-11-14",
      episodeBoot: "Artis Silvester"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Whiners Are Wieners",
      episodeSummary: "Jonathan Penner's refusal to commit costs him in the game. Pete Yurkowski is voted out.",
      episodeAirDate: "2012-11-21",
      episodeBoot: "Pete Yurkowski"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Hell Hath Frozen Over",
      episodeSummary: "Penner's storytelling at tribal council seals his fate. Jonathan Penner is voted out.",
      episodeAirDate: "2012-11-28",
      episodeBoot: "Jonathan Penner"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Shot Into Smithereens",
      episodeSummary: "Abi-Maria's abrasive personality makes her both a goat and a threat. Abi-Maria Gomes is voted out.",
      episodeAirDate: "2012-12-05",
      episodeBoot: "Abi-Maria Gomes"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Gouge My Eyes Out",
      episodeSummary: "Carter and Malcolm fight for immunity in the finale. Carter Williams and Malcolm Freberg are eliminated.",
      episodeAirDate: "2012-12-12",
      episodeBoot: "Carter Williams, Malcolm Freberg"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Denise Stapley completes the impossible by attending every tribal council. Denise defeats Lisa Whelchel and Michael Skupin 6-1-1 to become the Sole Survivor.",
      episodeAirDate: "2012-12-16",
      episodeBoot: null
    }
  ],

  // Season 26: Caramoan (Fans vs. Favorites 2)
  [
    {
      episodeNumber: 1,
      episodeTitle: "She Annoys Me Greatly",
      episodeSummary: "Ten returning Favorites face ten new Fans in another Fans vs Favorites season. Francesca Hogi becomes the first two-time first boot in Survivor history.",
      episodeAirDate: "2013-02-13",
      episodeBoot: "Francesca Hogi"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Kill or Be Killed",
      episodeSummary: "Shamar's aggressive behavior creates tension at the Fans camp. Allie Pohevitz is voted out from the Fans.",
      episodeAirDate: "2013-02-20",
      episodeBoot: "Allie Pohevitz"
    },
    {
      episodeNumber: 3,
      episodeTitle: "There's Gonna Be Hell to Pay",
      episodeSummary: "Brandon Hantz has a complete meltdown and is removed from the game. His tribe forfeits immunity to eliminate him.",
      episodeAirDate: "2013-02-27",
      episodeBoot: "Brandon Hantz"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Kill or Be Killed",
      episodeSummary: "The Fans continue to struggle against the experienced Favorites. Hope Driskill is voted out from the Fans.",
      episodeAirDate: "2013-03-06",
      episodeBoot: "Hope Driskill"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Persona Non Grata",
      episodeSummary: "Shamar is medically evacuated due to an eye injury. His departure brings relief to his tribe.",
      episodeAirDate: "2013-03-13",
      episodeBoot: "Shamar Thomas (evacuated)"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Operation Thunder Dome",
      episodeSummary: "The tribes swap and create new dynamics. Laura Alexander is voted out.",
      episodeAirDate: "2013-03-20",
      episodeBoot: "Laura Alexander"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Tubby Lunchbox",
      episodeSummary: "Matt and Michael scramble to survive on the new tribe. Matt Bischoff is voted out.",
      episodeAirDate: "2013-03-27",
      episodeBoot: "Matt Bischoff"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Blindside Time",
      episodeSummary: "Julia tries to play both sides but gets caught. Julia Landauer is voted out.",
      episodeAirDate: "2013-04-03",
      episodeBoot: "Julia Landauer"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Cut Off the Head of the Snake",
      episodeSummary: "The tribes merge and the Three Amigos form. Corinne Kaplan is blindsided for trying to flip.",
      episodeAirDate: "2013-04-10",
      episodeBoot: "Corinne Kaplan"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Zipping Over the Cuckoo's Nest",
      episodeSummary: "Michael and the remaining fans fight to survive. Michael Snow is voted out.",
      episodeAirDate: "2013-04-17",
      episodeBoot: "Michael Snow"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Come Over to the Dark Side",
      episodeSummary: "Malcolm plays two idols in one of Survivor's most dramatic tribal councils. Phillip Sheppard is blindsided.",
      episodeAirDate: "2013-04-24",
      episodeBoot: "Phillip Sheppard"
    },
    {
      episodeNumber: 12,
      episodeTitle: "The Beginning of the End",
      episodeSummary: "Malcolm's idol play catches up with him. Malcolm Freberg is voted out.",
      episodeAirDate: "2013-05-01",
      episodeBoot: "Malcolm Freberg"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Don't Say Anything About My Mom",
      episodeSummary: "Reynold and Andrea are eliminated as the endgame begins. Brenda's emotional family visit becomes memorable.",
      episodeAirDate: "2013-05-05",
      episodeBoot: "Reynold Toepfer, Andrea Boehlke"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Last Push",
      episodeSummary: "Brenda is blindsided after her generous act at the family visit. Erik Reichenbach is medically evacuated.",
      episodeAirDate: "2013-05-08",
      episodeBoot: "Brenda Lowe, Erik Reichenbach (evacuated), Eddie Fox"
    },
    {
      episodeNumber: 15,
      episodeTitle: "Reunion",
      episodeSummary: "John Cochran completes his transformation from superfan to Survivor winner. Cochran defeats Dawn Meehan and Sherri Biethman 8-0-0 to become the Sole Survivor.",
      episodeAirDate: "2013-05-12",
      episodeBoot: null
    }
  ],

  // Season 27: Blood vs. Water
  [
    {
      episodeNumber: 1,
      episodeTitle: "Blood Is Thicker Than Anything",
      episodeSummary: "Ten returning players compete against their loved ones with Redemption Island in play. Candice Cody and Rupert Boneham are sent to Redemption Island.",
      episodeAirDate: "2013-09-18",
      episodeBoot: "Marissa Peterson"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Rule in Chaos",
      episodeSummary: "Colton quits the game again, disappointing fans and players alike. Rachel Foulger is voted out.",
      episodeAirDate: "2013-09-25",
      episodeBoot: "Colton Cumbie (quit), Rachel Foulger"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Opening Pandora's Box",
      episodeSummary: "Tyson takes charge of his tribe while dealing with his injury. John Cody is voted out.",
      episodeAirDate: "2013-10-02",
      episodeBoot: "John Cody"
    },
    {
      episodeNumber: 4,
      episodeTitle: "One Armed Dude and Three Moms",
      episodeSummary: "Brad Culpepper becomes a target for his aggressive gameplay. Brad Culpepper is voted out.",
      episodeAirDate: "2013-10-09",
      episodeBoot: "Brad Culpepper"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Dead Can Still Talk",
      episodeSummary: "Caleb makes a big move at tribal council. Caleb Bankston forces a tie and Kat's boyfriend votes her out.",
      episodeAirDate: "2013-10-16",
      episodeBoot: "Kat Edorsson"
    },
    {
      episodeNumber: 6,
      episodeTitle: "One-Man Wrecking Ball",
      episodeSummary: "Tribe dynamics shift as the merge approaches. Laura Morett is voted out.",
      episodeAirDate: "2013-10-23",
      episodeBoot: "Laura Morett"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Swoop In for the Kill",
      episodeSummary: "The tribes merge and loved ones reunite in the game. Aras Baskauskas is blindsided in a major move.",
      episodeAirDate: "2013-10-30",
      episodeBoot: "Aras Baskauskas"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Skin of My Teeth",
      episodeSummary: "Vytas tries to work with the women but fails. Vytas Baskauskas is voted out.",
      episodeAirDate: "2013-11-06",
      episodeBoot: "Vytas Baskauskas"
    },
    {
      episodeNumber: 9,
      episodeTitle: "My Brother's Keeper",
      episodeSummary: "Tina's daughter Katie struggles in the game. Katie Collins is voted out.",
      episodeAirDate: "2013-11-13",
      episodeBoot: "Katie Collins"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Big Bad Wolf",
      episodeSummary: "Laura B tries to make moves but lacks support. Laura Boneham is voted out.",
      episodeAirDate: "2013-11-20",
      episodeBoot: "Laura Boneham"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Gloves Come Off",
      episodeSummary: "Caleb's loyalty is tested in the alliance. Caleb Bankston is voted out.",
      episodeAirDate: "2013-11-27",
      episodeBoot: "Caleb Bankston"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Rustle Feathers",
      episodeSummary: "Hayden tries to flip the game at tribal council. Ciera votes out her mom Laura in a shocking move.",
      episodeAirDate: "2013-12-04",
      episodeBoot: "Laura Morett"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Out on a Limb",
      episodeSummary: "A rock draw eliminates Katie after a tied vote. Hayden Moss is voted out.",
      episodeAirDate: "2013-12-11",
      episodeBoot: "Katie Collins, Hayden Moss"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Ciera and Tina are eliminated in the finale. Tyson Apostol defeats Gervase Peterson and Monica Culpepper 7-1-0 to become the Sole Survivor.",
      episodeAirDate: "2013-12-15",
      episodeBoot: "Ciera Eastin, Tina Wesson"
    }
  ],

  // Season 28: Cagayan (Brawn vs. Brains vs. Beauty)
  [
    {
      episodeNumber: 1,
      episodeTitle: "Hot Girl with a Grudge",
      episodeSummary: "Eighteen castaways are divided into Brawn, Brains, and Beauty tribes. David Samson is voted out first from the disastrous Brains tribe.",
      episodeAirDate: "2014-02-26",
      episodeBoot: "David Samson"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Cops-R-Us",
      episodeSummary: "Tony and Sarah form a secret cops alliance. Garrett Adelstein is blindsided from Brains after a chaotic open forum.",
      episodeAirDate: "2014-03-05",
      episodeBoot: "Garrett Adelstein"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Our Time to Shine",
      episodeSummary: "J'Tia pours out the rice in one of Survivor's most infamous moments. J'Tia Taylor is finally voted out from Brains.",
      episodeAirDate: "2014-03-12",
      episodeBoot: "J'Tia Taylor"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Odd One Out",
      episodeSummary: "A tribe swap reshuffles the game dynamics. Cliff Robinson is blindsided by Tony.",
      episodeAirDate: "2014-03-19",
      episodeBoot: "Cliff Robinson"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Slaughter",
      episodeSummary: "Lindsay quits after Cliff's elimination. Alexis Maxwell is voted out from the new Beauty.",
      episodeAirDate: "2014-03-26",
      episodeBoot: "Lindsey Ogle (quit), Alexis Maxwell"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Head of the Snake",
      episodeSummary: "Sarah becomes a swing vote between alliances. Sarah Lacina is blindsided in a 6-5 vote.",
      episodeAirDate: "2014-04-02",
      episodeBoot: "Sarah Lacina"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Mad Treasure Hunt",
      episodeSummary: "Tony finds the special idol while chaos erupts. Morgan McLeod is voted out.",
      episodeAirDate: "2014-04-09",
      episodeBoot: "Morgan McLeod"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Bag of Tricks",
      episodeSummary: "LJ and Tony's alliance begins to fracture. LJ McKanas is blindsided by Tony.",
      episodeAirDate: "2014-04-16",
      episodeBoot: "LJ McKanas"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Sitting in My Spy Shack",
      episodeSummary: "Tony's spy shack becomes a recurring joke. Jeremiah Wood is voted out.",
      episodeAirDate: "2014-04-23",
      episodeBoot: "Jeremiah Wood"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Chaos Is My Friend",
      episodeSummary: "Tony plays his idols in chaotic tribal councils. Jefra Bland is blindsided.",
      episodeAirDate: "2014-04-30",
      episodeBoot: "Jefra Bland"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Havoc to Wreak",
      episodeSummary: "Tasha fights for her survival with immunity wins. Tasha Fox is finally voted out.",
      episodeAirDate: "2014-05-07",
      episodeBoot: "Tasha Fox"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Straw That Broke the Camel's Back",
      episodeSummary: "Spencer and Trish are eliminated as Tony dominates. The finale approaches.",
      episodeAirDate: "2014-05-14",
      episodeBoot: "Trish Hegarty, Spencer Bledsoe"
    },
    {
      episodeNumber: 13,
      episodeTitle: "It's Do or Die",
      episodeSummary: "Kass makes fire against Woo in a surprise final two twist. Tony's aggressive gameplay is validated.",
      episodeAirDate: "2014-05-21",
      episodeBoot: "Kass McQuillen"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Tony Vlachos defeats Woo Hwang 8-1 in a dominant victory. His chaotic gameplay is rewarded by the jury.",
      episodeAirDate: "2014-05-21",
      episodeBoot: null
    }
  ],

  // Season 29: San Juan del Sur (Blood vs. Water 2)
  [
    {
      episodeNumber: 1,
      episodeTitle: "Suck It Up and Survive",
      episodeSummary: "Eighteen new players compete with their loved ones in the second Blood vs Water season. Nadiya Anderson is voted out first from Coyopa.",
      episodeAirDate: "2014-09-24",
      episodeBoot: "Nadiya Anderson"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Method to This Madness",
      episodeSummary: "Val lies about having two idols to protect herself. Val Collins is voted out from Coyopa.",
      episodeAirDate: "2014-10-01",
      episodeBoot: "Val Collins"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Actions vs. Accusations",
      episodeSummary: "John Rocker's controversial past catches up with him. John Rocker is voted out in a dramatic tribal council.",
      episodeAirDate: "2014-10-08",
      episodeBoot: "John Rocker"
    },
    {
      episodeNumber: 4,
      episodeTitle: "We're a Hot Mess",
      episodeSummary: "Drew throws a challenge and tries to orchestrate a vote. Drew Christy is blindsided by his own tribe for his arrogance.",
      episodeAirDate: "2014-10-15",
      episodeBoot: "Drew Christy"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Blood Is Blood",
      episodeSummary: "A tribe swap creates new dynamics for the pairs. Kelley Wentworth is voted out from the new Coyopa.",
      episodeAirDate: "2014-10-22",
      episodeBoot: "Kelley Wentworth"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Make Some Magic Happen",
      episodeSummary: "Dale tries to bluff with a fake idol. Dale Wentworth is voted out.",
      episodeAirDate: "2014-10-29",
      episodeBoot: "Dale Wentworth"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Million Dollar Decision",
      episodeSummary: "Julie quits the game amid personal struggles. Her quit affects the remaining players.",
      episodeAirDate: "2014-11-05",
      episodeBoot: "Julie McGee (quit)"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Wrinkle in the Plan",
      episodeSummary: "The tribes merge and Josh's alliance targets Jeremy. Josh Canfield is blindsided.",
      episodeAirDate: "2014-11-12",
      episodeBoot: "Josh Canfield"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Gettin' to Crunch Time",
      episodeSummary: "Jeremy's threat level makes him a target. Jeremy Collins is blindsided in a major move.",
      episodeAirDate: "2014-11-19",
      episodeBoot: "Jeremy Collins"
    },
    {
      episodeNumber: 10,
      episodeTitle: "This Is Where We Build Trust",
      episodeSummary: "Wes and his dad Keith compete together. Reed Kelly is voted out.",
      episodeAirDate: "2014-11-26",
      episodeBoot: "Reed Kelly"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Kind of Like Cream Cheese",
      episodeSummary: "Alec and Wes are eliminated as the numbers dwindle. The finale approaches.",
      episodeAirDate: "2014-12-03",
      episodeBoot: "Alec Christy, Wes Nale"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Still Holdin' On",
      episodeSummary: "Keith's challenge prowess keeps him safe. Jon Misch is blindsided with an idol in his pocket.",
      episodeAirDate: "2014-12-10",
      episodeBoot: "Jon Misch"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Let's Make a Move",
      episodeSummary: "Baylor and Keith are eliminated in the finale. Natalie's revenge tour is complete.",
      episodeAirDate: "2014-12-17",
      episodeBoot: "Baylor Wilson, Keith Nale"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Natalie Anderson defeats Jaclyn Schultz and Missy Payne 5-2-1 to become the Sole Survivor. Her revenge for Jeremy is complete.",
      episodeAirDate: "2014-12-17",
      episodeBoot: null
    }
  ],

  // Season 30: Worlds Apart (White Collar vs. Blue Collar vs. No Collar)
  [
    {
      episodeNumber: 1,
      episodeTitle: "It's Survivor Warfare",
      episodeSummary: "Eighteen castaways are divided by social class into three tribes. So Kim is voted out first from the White Collar tribe.",
      episodeAirDate: "2015-02-25",
      episodeBoot: "So Kim"
    },
    {
      episodeNumber: 2,
      episodeTitle: "It Will Be My Revenge",
      episodeSummary: "Vince's jealousy of Joe creates conflict at No Collar. Vince Sly is voted out.",
      episodeAirDate: "2015-03-04",
      episodeBoot: "Vince Sly"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Crazy Is as Crazy Does",
      episodeSummary: "Nina struggles to connect with her younger tribemates. Nina Poersch is voted out from No Collar.",
      episodeAirDate: "2015-03-11",
      episodeBoot: "Nina Poersch"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Winner Winner, Chicken Dinner",
      episodeSummary: "Lindsey and Rodney clash at Blue Collar. Lindsey Cascaddan is voted out.",
      episodeAirDate: "2015-03-18",
      episodeBoot: "Lindsey Cascaddan"
    },
    {
      episodeNumber: 5,
      episodeTitle: "We're Finally Playing Some Survivor",
      episodeSummary: "A tribe swap mixes up the social dynamics. Joaquin Souberbielle is voted out.",
      episodeAirDate: "2015-03-25",
      episodeBoot: "Joaquin Souberbielle"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Odd Woman Out",
      episodeSummary: "Kelly becomes an easy target after the swap. Kelly Remington is voted out.",
      episodeAirDate: "2015-04-01",
      episodeBoot: "Kelly Remington"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Line Will Be Drawn Tonight",
      episodeSummary: "The tribes merge and lines are drawn. Hali Ford is voted out.",
      episodeAirDate: "2015-04-08",
      episodeBoot: "Hali Ford"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Keep It Real",
      episodeSummary: "Joe's challenge dominance makes him the biggest target. Joe Anglim is blindsided when he finally loses immunity.",
      episodeAirDate: "2015-04-15",
      episodeBoot: "Joe Anglim"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Livin' on the Edge",
      episodeSummary: "Jenn plays her idol in a dramatic tribal council. Kelly is voted out in the revote.",
      episodeAirDate: "2015-04-22",
      episodeBoot: "Jenn Brown"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Bring the Popcorn",
      episodeSummary: "Shirin and Will have a heated confrontation. Shirin Oskooi is voted out amid controversy.",
      episodeAirDate: "2015-04-29",
      episodeBoot: "Shirin Oskooi"
    },
    {
      episodeNumber: 11,
      episodeTitle: "My Word Is My Bond",
      episodeSummary: "Tyler's strategic mind makes him a threat. Tyler Fredrickson is voted out.",
      episodeAirDate: "2015-05-06",
      episodeBoot: "Tyler Fredrickson"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Holding on for Dear Life",
      episodeSummary: "Dan's extra vote advantage doesn't save him. Dan Foley is blindsided.",
      episodeAirDate: "2015-05-13",
      episodeBoot: "Dan Foley"
    },
    {
      episodeNumber: 13,
      episodeTitle: "It's a Fickle, Fickle Game",
      episodeSummary: "Sierra and Rodney are eliminated in the finale. The final three face the jury.",
      episodeAirDate: "2015-05-20",
      episodeBoot: "Sierra Dawn Thomas, Rodney Lavoie Jr."
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Mike Holloway defeats Carolyn Rivera and Will Sims II 6-1-1 to become the Sole Survivor. His underdog story is complete.",
      episodeAirDate: "2015-05-20",
      episodeBoot: null
    }
  ],

  // Season 31: Cambodia (Second Chance)
  [
    {
      episodeNumber: 1,
      episodeTitle: "Second Chance",
      episodeSummary: "Twenty returning players voted in by fans get a second chance to win. Vytas Baskauskas is the first voted out from Ta Keo.",
      episodeAirDate: "2015-09-23",
      episodeBoot: "Vytas Baskauskas"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Survivor MacGyver",
      episodeSummary: "The castaways adapt to the brutal Cambodian conditions. Shirin Oskooi is voted out from Ta Keo.",
      episodeAirDate: "2015-09-30",
      episodeBoot: "Shirin Oskooi"
    },
    {
      episodeNumber: 3,
      episodeTitle: "We Got a Rat",
      episodeSummary: "Alliances form and distrust spreads through both camps. Peih-Gee Law is voted out.",
      episodeAirDate: "2015-10-07",
      episodeBoot: "Peih-Gee Law"
    },
    {
      episodeNumber: 4,
      episodeTitle: "What's the Beef?",
      episodeSummary: "A tribe swap changes the dynamics for everyone. Jeff Varner is voted out after a scramble.",
      episodeAirDate: "2015-10-14",
      episodeBoot: "Jeff Varner"
    },
    {
      episodeNumber: 5,
      episodeTitle: "A Snake in the Grass",
      episodeSummary: "Monica's loyalty is questioned by her alliance. Monica Padilla is blindsided.",
      episodeAirDate: "2015-10-21",
      episodeBoot: "Monica Padilla"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Play to Win",
      episodeSummary: "Another tribe swap creates three tribes. Woo Hwang is voted out.",
      episodeAirDate: "2015-10-28",
      episodeBoot: "Woo Hwang"
    },
    {
      episodeNumber: 7,
      episodeTitle: "My Wheels Are Spinning",
      episodeSummary: "The merge approaches with players positioning themselves. Terry Deitz leaves due to a family emergency.",
      episodeAirDate: "2015-11-04",
      episodeBoot: "Terry Deitz (quit)"
    },
    {
      episodeNumber: 8,
      episodeTitle: "You Call, We'll Haul",
      episodeSummary: "The tribes merge and idols become crucial. Kass McQuillen is blindsided.",
      episodeAirDate: "2015-11-11",
      episodeBoot: "Kass McQuillen"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Witches Coven",
      episodeSummary: "The women's alliance makes moves against the men. Andrew Savage is blindsided.",
      episodeAirDate: "2015-11-18",
      episodeBoot: "Andrew Savage"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Like Selling Your Soul to the Devil",
      episodeSummary: "Stephen's advantage fails to save him. Stephen Fishbach is voted out.",
      episodeAirDate: "2015-11-25",
      episodeBoot: "Stephen Fishbach"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Villains Have More Fun",
      episodeSummary: "Kelly Wiglesworth's quiet game ends. Kelly Wiglesworth is voted out.",
      episodeAirDate: "2015-12-02",
      episodeBoot: "Kelly Wiglesworth"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Tiny Little Shanks to the Heart",
      episodeSummary: "Abi-Maria and Joe are eliminated as the endgame approaches. Spencer and Jeremy battle for position.",
      episodeAirDate: "2015-12-09",
      episodeBoot: "Abi-Maria Gomes, Joe Anglim"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Lie, Cheat and Steal",
      episodeSummary: "Keith and Kimmi are eliminated in dramatic fashion. The final three face the jury.",
      episodeAirDate: "2015-12-16",
      episodeBoot: "Keith Nale, Kimmi Kappenberg"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Jeremy Collins defeats Spencer Bledsoe and Tasha Fox 10-0-0 in a perfect game. His wife's pregnancy announcement caps his emotional victory.",
      episodeAirDate: "2015-12-16",
      episodeBoot: null
    }
  ],

  // Season 32: Kaôh Rōng (Brawn vs. Brains vs. Beauty 2)
  [
    {
      episodeNumber: 1,
      episodeTitle: "I'm a Mental Giant",
      episodeSummary: "Eighteen castaways face brutal heat in Cambodia's Kaoh Rong region. Darnell Hamilton is voted out first from the Brawn tribe.",
      episodeAirDate: "2016-02-17",
      episodeBoot: "Darnell Hamilton"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Kindergarten Camp",
      episodeSummary: "Jennifer Lanzetti's indecision costs her at tribal council. Jennifer is voted out after flipping back and forth.",
      episodeAirDate: "2016-02-24",
      episodeBoot: "Jennifer Lanzetti"
    },
    {
      episodeNumber: 3,
      episodeTitle: "The Circle of Life",
      episodeSummary: "Caleb collapses during a brutal reward challenge in extreme heat. Alecia Holden is voted out from Brawn.",
      episodeAirDate: "2016-03-02",
      episodeBoot: "Alecia Holden"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Signed, Sealed and Delivered",
      episodeSummary: "Caleb Reynolds is medically evacuated in one of Survivor's scariest moments. His heroic challenge effort nearly kills him.",
      episodeAirDate: "2016-03-09",
      episodeBoot: "Caleb Reynolds (evacuated)"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Devils We Know",
      episodeSummary: "A tribe swap reshuffles the game dynamics. Anna Khait is voted out.",
      episodeAirDate: "2016-03-16",
      episodeBoot: "Anna Khait"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Play or Go Home",
      episodeSummary: "Peter's arrogance makes him a target at the new Brains tribe. Peter Baggenstos is blindsided.",
      episodeAirDate: "2016-03-23",
      episodeBoot: "Peter Baggenstos"
    },
    {
      episodeNumber: 7,
      episodeTitle: "It's Merge Time",
      episodeSummary: "The tribes merge and Nick's overconfidence backfires. Nick Maiorano is blindsided.",
      episodeAirDate: "2016-03-30",
      episodeBoot: "Nick Maiorano"
    },
    {
      episodeNumber: 8,
      episodeTitle: "The Jocks vs. the Pretty People",
      episodeSummary: "Debbie's erratic behavior begins to concern her allies. Neal Gottlieb is medically evacuated due to an infection.",
      episodeAirDate: "2016-04-06",
      episodeBoot: "Neal Gottlieb (evacuated)"
    },
    {
      episodeNumber: 9,
      episodeTitle: "It's Psychological Warfare",
      episodeSummary: "Debbie's claims about her many jobs become a running joke. Debbie Wanner is blindsided by her own alliance.",
      episodeAirDate: "2016-04-13",
      episodeBoot: "Debbie Wanner"
    },
    {
      episodeNumber: 10,
      episodeTitle: "I'm Not Here to Make Good Friends",
      episodeSummary: "Scot and Jason's bullying tactics backfire spectacularly. Scot Pollard is blindsided when Tai refuses to combine idols.",
      episodeAirDate: "2016-04-20",
      episodeBoot: "Scot Pollard"
    },
    {
      episodeNumber: 11,
      episodeTitle: "It's a 'Me' Game, Not a 'We' Game",
      episodeSummary: "Julia's double-dealing catches up with her at tribal council. Julia Sokolowski is voted out.",
      episodeAirDate: "2016-04-27",
      episodeBoot: "Julia Sokolowski"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Now's the Time to Start Scheming",
      episodeSummary: "Jason's abrasive gameplay finally comes to an end. Jason Kyle is voted out.",
      episodeAirDate: "2016-05-04",
      episodeBoot: "Jason Kyle"
    },
    {
      episodeNumber: 13,
      episodeTitle: "With Me or Not with Me",
      episodeSummary: "Joe del Campo is medically evacuated at final five due to intestinal issues. His health emergency changes the endgame.",
      episodeAirDate: "2016-05-11",
      episodeBoot: "Joe del Campo (evacuated)"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Cydney is eliminated in fire-making at final four. Michele Fitzgerald defeats Aubry Bracco and Tai Trang 5-2-0 in a controversial vote.",
      episodeAirDate: "2016-05-18",
      episodeBoot: "Cydney Gillon"
    }
  ],

  // Season 33: Millennials vs. Gen X
  [
    {
      episodeNumber: 1,
      episodeTitle: "May the Best Generation Win",
      episodeSummary: "Twenty castaways are divided by generation into Millennials and Gen X tribes. Rachel Ako is voted out first from the Millennials.",
      episodeAirDate: "2016-09-21",
      episodeBoot: "Rachel Ako"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Love Goggles",
      episodeSummary: "Mari's strategic mind makes her an early target at the Millennials tribe. Mari Takahashi is blindsided in a shocking vote.",
      episodeAirDate: "2016-09-28",
      episodeBoot: "Mari Takahashi"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Your Job Is Recon",
      episodeSummary: "Paul's heart issues concern his Gen X tribe but he recovers. Paul Wachter is voted out after the women flip.",
      episodeAirDate: "2016-10-05",
      episodeBoot: "Paul Wachter"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Who's the Sucker at the Table?",
      episodeSummary: "Lucy takes control of Gen X with an iron fist and alienates allies. Lucy Huang is blindsided after becoming too controlling.",
      episodeAirDate: "2016-10-12",
      episodeBoot: "Lucy Huang"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Idol Search Party",
      episodeSummary: "A tribe swap creates new alliances and dynamics. CeCe Taylor is voted out from the new tribe.",
      episodeAirDate: "2016-10-19",
      episodeBoot: "CeCe Taylor"
    },
    {
      episodeNumber: 6,
      episodeTitle: "The Truth Works Well",
      episodeSummary: "Michaela Bradshaw is blindsided by Jay in a shocking move. Her reaction becomes one of Survivor's most iconic moments.",
      episodeAirDate: "2016-10-26",
      episodeBoot: "Michaela Bradshaw"
    },
    {
      episodeNumber: 7,
      episodeTitle: "I Will Destroy You",
      episodeSummary: "The tribes merge and power struggles emerge between alliances. Michelle Schubert is voted out.",
      episodeAirDate: "2016-11-02",
      episodeBoot: "Michelle Schubert"
    },
    {
      episodeNumber: 8,
      episodeTitle: "I'm the Kingpin",
      episodeSummary: "Taylor's food theft creates controversy at camp. Taylor Stocker is voted out for his antics.",
      episodeAirDate: "2016-11-09",
      episodeBoot: "Taylor Stocker"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Still Throwin' Punches",
      episodeSummary: "Chris and David's rivalry intensifies as both fight for control. Chris Hammons is blindsided.",
      episodeAirDate: "2016-11-16",
      episodeBoot: "Chris Hammons"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Million Dollar Gamble",
      episodeSummary: "A tied vote leads to a rock draw in a heartbreaking elimination. Jessica Lewis is eliminated by drawing the wrong rock.",
      episodeAirDate: "2016-11-23",
      episodeBoot: "Jessica Lewis"
    },
    {
      episodeNumber: 11,
      episodeTitle: "About to Have a Rumble",
      episodeSummary: "Zeke makes a big move against his own alliance. Zeke Smith is voted out after overplaying.",
      episodeAirDate: "2016-11-30",
      episodeBoot: "Zeke Smith"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Slayed the Survivor Dragon",
      episodeSummary: "Will and Sunday are eliminated as the finale approaches. David's idol plays dominate the game.",
      episodeAirDate: "2016-12-07",
      episodeBoot: "Will Wahl, Sunday Burquest"
    },
    {
      episodeNumber: 13,
      episodeTitle: "I'm Going for a Million Bucks",
      episodeSummary: "Jay, Bret, and David are eliminated in the finale. Adam's emotional story captivates viewers.",
      episodeAirDate: "2016-12-14",
      episodeBoot: "Jay Starrett, Bret LaBelle, David Wright"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Adam Klein defeats Ken McNickle and Hannah Shapiro 10-0-0 in a perfect game. His emotional story about his dying mother resonates with everyone.",
      episodeAirDate: "2016-12-14",
      episodeBoot: null
    }
  ],

  // Season 34: Game Changers
  [
    {
      episodeNumber: 1,
      episodeTitle: "The Stakes Have Been Raised",
      episodeSummary: "Twenty returning 'game changers' compete in Fiji for the title. Ciera Eastin is the first voted out from Mana tribe.",
      episodeAirDate: "2017-03-08",
      episodeBoot: "Ciera Eastin"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Survivor Jackpot",
      episodeSummary: "Tony's aggressive spy bunker gameplay makes him an early target. Tony Vlachos is blindsided by his own tribe.",
      episodeAirDate: "2017-03-15",
      episodeBoot: "Tony Vlachos"
    },
    {
      episodeNumber: 3,
      episodeTitle: "The Tables Have Turned",
      episodeSummary: "Caleb's close connection to Tai threatens his game. Caleb Reynolds is voted out to weaken Tai.",
      episodeAirDate: "2017-03-22",
      episodeBoot: "Caleb Reynolds"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Dirty Deed",
      episodeSummary: "Malcolm is eliminated in a controversial joint tribal council twist. Malcolm Freberg is blindsided with JT's help giving away information.",
      episodeAirDate: "2017-03-29",
      episodeBoot: "Malcolm Freberg"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Vote Early, Vote Often",
      episodeSummary: "JT's mistakes from the joint tribal continue to haunt him. JT Thomas is voted out by his own tribe.",
      episodeAirDate: "2017-04-05",
      episodeBoot: "JT Thomas"
    },
    {
      episodeNumber: 6,
      episodeTitle: "What Happened on Exile, Stays on Exile",
      episodeSummary: "Sandra's reign as the queen of Survivor finally ends. Sandra Diaz-Twine is voted out after dominating the pre-merge.",
      episodeAirDate: "2017-04-12",
      episodeBoot: "Sandra Diaz-Twine"
    },
    {
      episodeNumber: 7,
      episodeTitle: "There's a New Sheriff in Town",
      episodeSummary: "Jeff Varner outs Zeke Smith as transgender in one of Survivor's darkest moments. Varner is unanimously eliminated without a vote.",
      episodeAirDate: "2017-04-12",
      episodeBoot: "Jeff Varner"
    },
    {
      episodeNumber: 8,
      episodeTitle: "A Line Drawn in Concrete",
      episodeSummary: "The tribes merge and battle lines are drawn between alliances. Hali Ford is voted out at the merge.",
      episodeAirDate: "2017-04-19",
      episodeBoot: "Hali Ford"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Reinventing How This Game Is Played",
      episodeSummary: "Ozzy's challenge dominance makes him too big a threat. Ozzy Lusth is voted out in his fourth season.",
      episodeAirDate: "2017-04-26",
      episodeBoot: "Ozzy Lusth"
    },
    {
      episodeNumber: 10,
      episodeTitle: "It Is Not a High Without a Low",
      episodeSummary: "Debbie's erratic behavior returns and alienates her allies. Debbie Wanner is voted out.",
      episodeAirDate: "2017-05-03",
      episodeBoot: "Debbie Wanner"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Parting Is Such Sweet Sorrow",
      episodeSummary: "Zeke's game comes to an end after his aggressive overplaying. Zeke Smith is voted out.",
      episodeAirDate: "2017-05-10",
      episodeBoot: "Zeke Smith"
    },
    {
      episodeNumber: 12,
      episodeTitle: "No Good Deed Goes Unpunished",
      episodeSummary: "Sierra's legacy advantage comes into play as she's targeted. Sierra Dawn Thomas is blindsided.",
      episodeAirDate: "2017-05-17",
      episodeBoot: "Sierra Dawn Thomas"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Andrea, Michaela, Cirie, Aubry, and Tai are eliminated in the finale. Sarah Lacina defeats Brad Culpepper and Troyzan Robertson 7-3-0 to become the Sole Survivor.",
      episodeAirDate: "2017-05-24",
      episodeBoot: "Andrea Boehlke, Michaela Bradshaw, Cirie Fields, Aubry Bracco, Tai Trang"
    }
  ],

  // Season 35: Heroes vs. Healers vs. Hustlers
  [
    {
      episodeNumber: 1,
      episodeTitle: "I'm Not Crazy, I'm Confident",
      episodeSummary: "Eighteen castaways are divided into Heroes, Healers, and Hustlers tribes. Katrina Radke is the first voted out from the Heroes.",
      episodeAirDate: "2017-09-27",
      episodeBoot: "Katrina Radke"
    },
    {
      episodeNumber: 2,
      episodeTitle: "I'm a Wild Banshee",
      episodeSummary: "Simone struggles to adapt to the outdoor conditions and camp life. Simone Nguyen is voted out from the Hustlers.",
      episodeAirDate: "2017-10-04",
      episodeBoot: "Simone Nguyen"
    },
    {
      episodeNumber: 3,
      episodeTitle: "My Kisses Are Very Private",
      episodeSummary: "Patrick's erratic behavior and energy alienates his Hustler tribe. Patrick Bolton is voted out.",
      episodeAirDate: "2017-10-11",
      episodeBoot: "Patrick Bolton"
    },
    {
      episodeNumber: 4,
      episodeTitle: "I Don't Like Having Snakes Around",
      episodeSummary: "A tribe swap shakes up alliances and creates new dynamics. Alan Ball is voted out from the new tribe.",
      episodeAirDate: "2017-10-18",
      episodeBoot: "Alan Ball"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Past Will Eat You Alive",
      episodeSummary: "Roark's strategic play backfires when Chrissy turns on her. Roark Luskin is voted out.",
      episodeAirDate: "2017-10-25",
      episodeBoot: "Roark Luskin"
    },
    {
      episodeNumber: 6,
      episodeTitle: "This Is Why You Play Survivor",
      episodeSummary: "Ali's alliance with Ryan crumbles around her. Ali Elliott is voted out.",
      episodeAirDate: "2017-11-01",
      episodeBoot: "Ali Elliott"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Get to Gettin'",
      episodeSummary: "The tribes merge and the game intensifies with new alliances. Jessica Johnston is voted out at the merge.",
      episodeAirDate: "2017-11-08",
      episodeBoot: "Jessica Johnston"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Playing with the Devil",
      episodeSummary: "Cole's eating habits and physical threat level annoy his tribemates. Cole Medders is voted out.",
      episodeAirDate: "2017-11-15",
      episodeBoot: "Cole Medders"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Fear of the Unknown",
      episodeSummary: "Desi fights for survival but can't overcome the numbers. Desi Williams is voted out.",
      episodeAirDate: "2017-11-22",
      episodeBoot: "Desi Williams"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Buy One, Get One Free",
      episodeSummary: "Joe's idol plays run out and he becomes vulnerable. Joe Mena is voted out.",
      episodeAirDate: "2017-11-29",
      episodeBoot: "Joe Mena"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Not Going to Roll Over and Die",
      episodeSummary: "Lauren's extra vote could change everything but she's blindsided. Lauren Rimmer is voted out with an idol in her possession.",
      episodeAirDate: "2017-12-06",
      episodeBoot: "Lauren Rimmer"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Million Dollar Night",
      episodeSummary: "Ashley, Devon, and Mike are eliminated as Ben dominates with idol finds. The fire-making twist debuts.",
      episodeAirDate: "2017-12-13",
      episodeBoot: "Ashley Nolan, Mike Zahalsky, Devon Pinto"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Ben Driebergen defeats Chrissy Hofbeck and Ryan Ulrich 5-2-1 after winning the new fire-making challenge. His PTSD story resonates with viewers.",
      episodeAirDate: "2017-12-20",
      episodeBoot: null
    }
  ],

  // Season 36: Ghost Island
  [
    {
      episodeNumber: 1,
      episodeTitle: "Can You Reverse the Curse?",
      episodeSummary: "Twenty new castaways compete with cursed advantages from past seasons. Stephanie Gonzalez is the first voted out from Malolo.",
      episodeAirDate: "2018-02-28",
      episodeBoot: "Stephanie Gonzalez"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Only Time Will Tell",
      episodeSummary: "Jacob's lies about Ghost Island backfire spectacularly. Jacob Derwin is voted out after his deception is exposed.",
      episodeAirDate: "2018-03-07",
      episodeBoot: "Jacob Derwin"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Trust Your Gut",
      episodeSummary: "Morgan's idol advantage is wasted when Domenick outplays her. Morgan Ricke is voted out.",
      episodeAirDate: "2018-03-14",
      episodeBoot: "Morgan Ricke"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Fate Is the Homie",
      episodeSummary: "A tribe swap scrambles the game and changes dynamics. Brendan Shapiro is voted out from the new Malolo.",
      episodeAirDate: "2018-03-21",
      episodeBoot: "Brendan Shapiro"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Sea Slug Slugger",
      episodeSummary: "Stephanie Johnson fights for survival against the majority. Stephanie Johnson is voted out.",
      episodeAirDate: "2018-03-28",
      episodeBoot: "Stephanie Johnson"
    },
    {
      episodeNumber: 6,
      episodeTitle: "A Diamond in the Rough",
      episodeSummary: "James's loyalty is tested when his alliance crumbles. James Lim is voted out.",
      episodeAirDate: "2018-04-04",
      episodeBoot: "James Lim"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Gotta Risk It for the Biscuit",
      episodeSummary: "The tribes merge and the cursed idols from Ghost Island come into play. Libby Vincek is voted out at the merge.",
      episodeAirDate: "2018-04-11",
      episodeBoot: "Libby Vincek"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Fear Keeps You Sharp",
      episodeSummary: "Chris Noble's arrogance and rapping make him a target. Chris Noble is blindsided with an idol in his pocket.",
      episodeAirDate: "2018-04-18",
      episodeBoot: "Chris Noble"
    },
    {
      episodeNumber: 9,
      episodeTitle: "The Sea Slug Slugger",
      episodeSummary: "Desiree's plan to flip on her alliance is exposed by Laurel. Desiree Afuye is voted out.",
      episodeAirDate: "2018-04-25",
      episodeBoot: "Desiree Afuye"
    },
    {
      episodeNumber: 10,
      episodeTitle: "It's Like the Perfect Crime",
      episodeSummary: "Jenna's lack of strategic moves costs her in the game. Jenna Bowman is voted out.",
      episodeAirDate: "2018-05-02",
      episodeBoot: "Jenna Bowman"
    },
    {
      episodeNumber: 11,
      episodeTitle: "The Finish Line Is in Sight",
      episodeSummary: "Michael's impressive idol plays finally run out. Michael Yerger is voted out.",
      episodeAirDate: "2018-05-09",
      episodeBoot: "Michael Yerger"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Always Be Moving",
      episodeSummary: "Kellyn and Chelsea are eliminated as the finale approaches. The Naviti strong alliance crumbles.",
      episodeAirDate: "2018-05-16",
      episodeBoot: "Kellyn Bechtold, Chelsea Townsend"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "The first tied jury vote in Survivor history occurs between Wendell and Domenick. Wendell Holland defeats Domenick Abbate and Laurel Johnson 6-5-0 after Laurel breaks the tie.",
      episodeAirDate: "2018-05-23",
      episodeBoot: "Donathan Hurley, Angela Perkins, Sebastian Noel"
    }
  ],

  // Season 37: David vs. Goliath
  [
    {
      episodeNumber: 1,
      episodeTitle: "Appearances Are Deceiving",
      episodeSummary: "Twenty castaways are divided into underdogs (Davids) and overachievers (Goliaths). Pat Cusack is medically evacuated after a boat accident.",
      episodeAirDate: "2018-09-26",
      episodeBoot: "Pat Cusack (evacuated)"
    },
    {
      episodeNumber: 2,
      episodeTitle: "The Chicken Has Flown the Coop",
      episodeSummary: "Jeremy's scheming makes him a target on the Goliaths. Jessica Peet is voted out from the Davids.",
      episodeAirDate: "2018-10-03",
      episodeBoot: "Jessica Peet"
    },
    {
      episodeNumber: 3,
      episodeTitle: "I Am Goliath Strong",
      episodeSummary: "Natalie's abrasive personality alienates her Goliath tribe. Natalie Cole is voted out for her attitude.",
      episodeAirDate: "2018-10-10",
      episodeBoot: "Natalie Cole"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Time to Bring About the Charmpocalypse",
      episodeSummary: "Jeremy Crawford's overplaying and paranoia catches up with him. Jeremy Crawford is voted out.",
      episodeAirDate: "2018-10-17",
      episodeBoot: "Jeremy Crawford"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Jackets and Eggs",
      episodeSummary: "A tribe swap creates new dynamics and Natalia's control is challenged. Natalia Azoqa is blindsided by Alec's flip.",
      episodeAirDate: "2018-10-24",
      episodeBoot: "Natalia Azoqa"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Aren't Brochachos Just Adorable?",
      episodeSummary: "The Brochachos alliance forms between Alec, Christian, Nick, and others. Lyrsa Torres is voted out.",
      episodeAirDate: "2018-10-31",
      episodeBoot: "Lyrsa Torres"
    },
    {
      episodeNumber: 7,
      episodeTitle: "There's Gonna Be Tears Shed",
      episodeSummary: "The tribes merge and Elizabeth becomes a target. Elizabeth Olson is voted out at the merge.",
      episodeAirDate: "2018-11-07",
      episodeBoot: "Elizabeth Olson"
    },
    {
      episodeNumber: 8,
      episodeTitle: "You Get What You Give",
      episodeSummary: "John Hennigan's physical threat level and likability cost him. John 'The Mayor of Slamtown' is blindsided.",
      episodeAirDate: "2018-11-14",
      episodeBoot: "John Hennigan"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Breadth-First Search",
      episodeSummary: "Dan plays his idol but the Davids outmaneuver him with the idol nullifier. Dan Rengering is eliminated with an idol played.",
      episodeAirDate: "2018-11-21",
      episodeBoot: "Dan Rengering"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Tribal Lines Are Blurred",
      episodeSummary: "Alec and Christian battle for immunity as tribal lines blur. Alec Merlino is voted out.",
      episodeAirDate: "2018-11-28",
      episodeBoot: "Alec Merlino"
    },
    {
      episodeNumber: 11,
      episodeTitle: "So Smart They're Dumb",
      episodeSummary: "Carl's advantage dominance makes him too big a threat. Carl Boudreaux is voted out.",
      episodeAirDate: "2018-12-05",
      episodeBoot: "Carl Boudreaux"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Are You Feeling Lucky?",
      episodeSummary: "Gabby turns on her closest ally Christian but it backfires. Gabby Pascuzzi is blindsided by her own move.",
      episodeAirDate: "2018-12-12",
      episodeBoot: "Gabby Pascuzzi"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Finale",
      episodeSummary: "Christian, Davie, Kara, and Alison are eliminated in the finale. Nick Wilson defeats Mike White and Angelina Keeley 7-3-0 to become the Sole Survivor.",
      episodeAirDate: "2018-12-19",
      episodeBoot: "Christian Hubicki, Davie Rickenbacker, Kara Kay, Alison Raybould"
    }
  ],

  // Season 38: Edge of Extinction
  [
    {
      episodeNumber: 1,
      episodeTitle: "It Smells Like Success",
      episodeSummary: "Four returning players join fourteen new castaways with the Edge of Extinction twist. Reem Daly is the first voted out and goes to the Edge.",
      episodeAirDate: "2019-02-20",
      episodeBoot: "Reem Daly"
    },
    {
      episodeNumber: 2,
      episodeTitle: "One of Us Is Going to Win the War",
      episodeSummary: "Keith's weakness in challenges makes him a target. Keith Sowell is voted out and goes to the Edge.",
      episodeAirDate: "2019-02-27",
      episodeBoot: "Keith Sowell"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Betrayals Are Going to Get Exposed",
      episodeSummary: "Chris Underwood becomes a victim of Wardog's scheming. Chris is voted out and begins his Edge journey.",
      episodeAirDate: "2019-03-06",
      episodeBoot: "Chris Underwood"
    },
    {
      episodeNumber: 4,
      episodeTitle: "I Need a Dance Partner",
      episodeSummary: "Rick Devens and David Wright's alliance forms on Manu. Aubry Bracco is voted out and goes to the Edge.",
      episodeAirDate: "2019-03-13",
      episodeBoot: "Aubry Bracco"
    },
    {
      episodeNumber: 5,
      episodeTitle: "It's Like the Worst Cocktail Party Ever",
      episodeSummary: "Joe Anglim's threat level grows on Kama tribe. Wendy Diaz is voted out for releasing the chickens.",
      episodeAirDate: "2019-03-20",
      episodeBoot: "Wendy Diaz"
    },
    {
      episodeNumber: 6,
      episodeTitle: "There's Always a Twist",
      episodeSummary: "The Edge of Extinction returnee challenge occurs and Rick returns. A tribe swap changes dynamics.",
      episodeAirDate: "2019-03-27",
      episodeBoot: "Rick Devens (returned)"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Lesu Down",
      episodeSummary: "The tribes merge and the Edge inhabitants watch from afar. Joe Anglim is voted out for being too threatening.",
      episodeAirDate: "2019-04-03",
      episodeBoot: "Joe Anglim"
    },
    {
      episodeNumber: 8,
      episodeTitle: "I'm the Puppet Master",
      episodeSummary: "Eric's control of the game makes him a target. Eric Hafemann is blindsided by the Lesu alliance.",
      episodeAirDate: "2019-04-10",
      episodeBoot: "Eric Hafemann"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Blood of a Blindside",
      episodeSummary: "Julia and Ron fight for position in the majority alliance. Julia Carter is voted out.",
      episodeAirDate: "2019-04-17",
      episodeBoot: "Julia Carter"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Fasten Your Seatbelts",
      episodeSummary: "David Wright's second chance at the game ends. David Wright is voted out and goes to the Edge.",
      episodeAirDate: "2019-04-24",
      episodeBoot: "David Wright"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Awkward",
      episodeSummary: "Kelley Wentworth's third time playing isn't the charm. Kelley Wentworth is voted out.",
      episodeAirDate: "2019-05-01",
      episodeBoot: "Kelley Wentworth"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Idol or Bust",
      episodeSummary: "Wardog's aggressive gameplay catches up to him. Wardog and Ron Clark are voted out.",
      episodeAirDate: "2019-05-08",
      episodeBoot: "Dan 'Wardog' DaSilva, Ron Clark"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Chris returns from the Edge, gives up immunity, and wins fire-making. Chris Underwood defeats Gavin Whitson and Julie Rosenberg 9-4-0 in a controversial win after spending most of the game on the Edge.",
      episodeAirDate: "2019-05-15",
      episodeBoot: "Aurora McCreary, Victoria Baamonde, Lauren O'Connell, Rick Devens"
    }
  ],

  // Season 39: Island of the Idols
  [
    {
      episodeNumber: 1,
      episodeTitle: "I Vote You Out and That's It",
      episodeSummary: "Boston Rob and Sandra serve as mentors on the Island of the Idols. Ronnie Bardah is the first voted out from Lairo.",
      episodeAirDate: "2019-09-25",
      episodeBoot: "Ronnie Bardah"
    },
    {
      episodeNumber: 2,
      episodeTitle: "YOLO, Let's Play!",
      episodeSummary: "Molly becomes an early strategic threat on Vokai. Molly Byman is voted out.",
      episodeAirDate: "2019-10-02",
      episodeBoot: "Molly Byman"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Honesty Would Be Chill",
      episodeSummary: "Vince visits the Island of the Idols for a lesson. Vince Moua is voted out.",
      episodeAirDate: "2019-10-09",
      episodeBoot: "Vince Moua"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Plan Z",
      episodeSummary: "Chelsea's early connections hurt her game at Lairo. Chelsea Walker is voted out.",
      episodeAirDate: "2019-10-16",
      episodeBoot: "Chelsea Walker"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Don't Bite the Hand That Feeds You",
      episodeSummary: "A tribe swap creates new alliances and strategies. Tom Laidlaw is voted out.",
      episodeAirDate: "2019-10-23",
      episodeBoot: "Tom Laidlaw"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Suck It Up, Buttercup",
      episodeSummary: "Jack's blindfold challenge mistake goes viral. Jack Nichting is voted out.",
      episodeAirDate: "2019-10-30",
      episodeBoot: "Jack Nichting"
    },
    {
      episodeNumber: 7,
      episodeTitle: "I Was Born at Night, but Not Last Night",
      episodeSummary: "Jamal confronts unconscious bias in a powerful tribal council. Jamal Shipman is voted out.",
      episodeAirDate: "2019-11-06",
      episodeBoot: "Jamal Shipman"
    },
    {
      episodeNumber: 8,
      episodeTitle: "We Made It to the Merge!",
      episodeSummary: "The tribes merge and a disturbing situation with Dan Spilo emerges. Kellee Kim is voted out amid the controversy.",
      episodeAirDate: "2019-11-13",
      episodeBoot: "Kellee Kim"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Two for the Price of One",
      episodeSummary: "The aftermath of the controversy affects the game dynamics. Missy and Aaron are voted out.",
      episodeAirDate: "2019-11-20",
      episodeBoot: "Missy Byrd, Aaron Meredith"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Bring on the Bacon",
      episodeSummary: "Elizabeth's handling of the situation is criticized by viewers. Elizabeth Beisel is voted out.",
      episodeAirDate: "2019-11-27",
      episodeBoot: "Elizabeth Beisel"
    },
    {
      episodeNumber: 11,
      episodeTitle: "A Very Special Episode of Survivor",
      episodeSummary: "Dan Spilo is removed from the game by production in an unprecedented move. Karishma is also eliminated.",
      episodeAirDate: "2019-12-11",
      episodeBoot: "Dan Spilo (ejected), Karishma Patel"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Mama, Look at Me Now",
      episodeSummary: "Elaine fights for survival with her idol but it's not enough. Elaine Stott and Lauren Beck are eliminated.",
      episodeAirDate: "2019-12-18",
      episodeBoot: "Elaine Stott, Lauren Beck"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Janet and Noura are eliminated in the finale. Tommy Sheehan defeats Dean Kowalski and Noura Salman 8-1-1 to become the Sole Survivor.",
      episodeAirDate: "2019-12-18",
      episodeBoot: "Janet Carbin, Noura Salman"
    }
  ],

  // Season 40: Winners at War
  [
    {
      episodeNumber: 1,
      episodeTitle: "Greatest of the Greats",
      episodeSummary: "Twenty winners compete for a $2 million prize with fire tokens. Natalie Anderson is voted out first and goes to the Edge of Extinction.",
      episodeAirDate: "2020-02-12",
      episodeBoot: "Natalie Anderson"
    },
    {
      episodeNumber: 2,
      episodeTitle: "It's Like a Survivor Economy",
      episodeSummary: "The fire token economy develops as players adapt to the new twist. Amber Mariano is voted out.",
      episodeAirDate: "2020-02-19",
      episodeBoot: "Amber Mariano"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Out for Blood",
      episodeSummary: "Danni's paranoia costs her as she becomes a target. Danni Boatwright is voted out.",
      episodeAirDate: "2020-02-26",
      episodeBoot: "Danni Boatwright"
    },
    {
      episodeNumber: 4,
      episodeTitle: "I Like Revenge",
      episodeSummary: "A tribe swap shakes up the game significantly. Ethan Zohn is voted out after an emotional Edge challenge.",
      episodeAirDate: "2020-03-04",
      episodeBoot: "Ethan Zohn"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Buddy System on Steroids",
      episodeSummary: "Rob's controlling buddy system gameplay becomes a liability. Tyson Apostol is voted out.",
      episodeAirDate: "2020-03-11",
      episodeBoot: "Tyson Apostol"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Quick on the Draw",
      episodeSummary: "The poker alliance from outside the game crumbles. Rob Mariano is finally voted out.",
      episodeAirDate: "2020-03-18",
      episodeBoot: "Rob Mariano"
    },
    {
      episodeNumber: 7,
      episodeTitle: "We're in the Majors",
      episodeSummary: "Sandra quits from the Edge of Extinction. Parvati Shallow is voted out.",
      episodeAirDate: "2020-03-25",
      episodeBoot: "Sandra Diaz-Twine (quit Edge), Parvati Shallow"
    },
    {
      episodeNumber: 8,
      episodeTitle: "This Is Where the Battle Begins",
      episodeSummary: "Yul's strategic mind makes him a major threat. Yul Kwon is voted out.",
      episodeAirDate: "2020-04-01",
      episodeBoot: "Yul Kwon"
    },
    {
      episodeNumber: 9,
      episodeTitle: "War Is Not Pretty",
      episodeSummary: "The tribes merge and Wendell's social game with Michele fails. Wendell Holland is voted out.",
      episodeAirDate: "2020-04-08",
      episodeBoot: "Wendell Holland"
    },
    {
      episodeNumber: 10,
      episodeTitle: "The Full Circle",
      episodeSummary: "Adam's attempt to play Jeff's podium as an idol becomes legendary. Adam Klein is voted out.",
      episodeAirDate: "2020-04-15",
      episodeBoot: "Adam Klein"
    },
    {
      episodeNumber: 11,
      episodeTitle: "This Is Extortion",
      episodeSummary: "Tyson returns from the Edge of Extinction. Sophie Clarke is blindsided with an idol in her pocket.",
      episodeAirDate: "2020-04-22",
      episodeBoot: "Tyson Apostol (returned), Sophie Clarke"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Friendly Fire",
      episodeSummary: "Kim's idol save is dramatic but she's eliminated. Tyson and Kim Spradlin-Wolfe are voted out.",
      episodeAirDate: "2020-04-29",
      episodeBoot: "Tyson Apostol, Kim Spradlin-Wolfe"
    },
    {
      episodeNumber: 13,
      episodeTitle: "The Penultimate Step of the War",
      episodeSummary: "Jeremy, Nick, Denise, and Ben are eliminated as the endgame intensifies. The Edge returnee challenge approaches.",
      episodeAirDate: "2020-05-06",
      episodeBoot: "Jeremy Collins, Nick Wilson, Denise Stapley, Ben Driebergen"
    },
    {
      episodeNumber: 14,
      episodeTitle: "It All Boils Down to This",
      episodeSummary: "Natalie returns from the Edge but loses fire-making to Tony. Tony Vlachos defeats Natalie Anderson and Michele Fitzgerald 12-4-0 to become the second two-time Sole Survivor.",
      episodeAirDate: "2020-05-13",
      episodeBoot: "Sarah Lacina, Natalie Anderson (returned)"
    }
  ],

  // Season 41
  [
    {
      episodeNumber: 1,
      episodeTitle: "A New Era",
      episodeSummary: "The 'new era' of Survivor begins with 26 days instead of 39 and many new twists. Eric Abraham is voted out first.",
      episodeAirDate: "2021-09-22",
      episodeBoot: "Eric Abraham"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Move Fast or Die",
      episodeSummary: "Sara Wilson is eliminated as the Beware Advantages create chaos. The three-way idol phrase twist begins.",
      episodeAirDate: "2021-09-29",
      episodeBoot: "Sara Wilson"
    },
    {
      episodeNumber: 3,
      episodeTitle: "My Million Dollar Mistake",
      episodeSummary: "The Beware Advantages require players to say embarrassing phrases. Voce Wiley is voted out from Yase.",
      episodeAirDate: "2021-10-06",
      episodeBoot: "Voce Wiley"
    },
    {
      episodeNumber: 4,
      episodeTitle: "They Hate Me 'Cause They Ain't Me",
      episodeSummary: "Brad's Beware Advantage costs him his vote until all phrases are said. Brad Reese is voted out.",
      episodeAirDate: "2021-10-13",
      episodeBoot: "Brad Reese"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Strategist or the Loyalist",
      episodeSummary: "JD's extra vote scheming catches up to him at Ua tribe. JD Robinson is voted out.",
      episodeAirDate: "2021-10-20",
      episodeBoot: "JD Robinson"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Ready to Play Like a Lion",
      episodeSummary: "Genie fights to survive as the smallest tribe struggles. Genie Chen is voted out from Ua.",
      episodeAirDate: "2021-10-27",
      episodeBoot: "Genie Chen"
    },
    {
      episodeNumber: 7,
      episodeTitle: "There's Gonna Be Blood",
      episodeSummary: "Sydney's Shot in the Dark fails to save her. Sydney Segal is voted out as the merge approaches.",
      episodeAirDate: "2021-11-03",
      episodeBoot: "Sydney Segal"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Betraydar",
      episodeSummary: "The merge brings the Earn the Merge twist where not everyone makes the jury. Tiffany Seely is voted out.",
      episodeAirDate: "2021-11-10",
      episodeBoot: "Tiffany Seely"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Who's Who in the Zoo",
      episodeSummary: "Evvie's allies can't save them from the majority. Evvie Jagoda is voted out.",
      episodeAirDate: "2021-11-17",
      episodeBoot: "Evvie Jagoda"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Baby with a Machine Gun",
      episodeSummary: "Naseer's idol is wasted when Shan and others target him. Naseer Muttalif is voted out.",
      episodeAirDate: "2021-11-24",
      episodeBoot: "Naseer Muttalif"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Do or Die",
      episodeSummary: "Shan's control of the game makes her the biggest target. Shan Smith is blindsided in a major move.",
      episodeAirDate: "2021-12-01",
      episodeBoot: "Shan Smith"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Truth Kamikaze",
      episodeSummary: "The Do or Die twist debuts and Liana is eliminated. The endgame intensifies.",
      episodeAirDate: "2021-12-08",
      episodeBoot: "Liana Wallace"
    },
    {
      episodeNumber: 13,
      episodeTitle: "One Thing Left to Do... Win",
      episodeSummary: "Danny and Ricard are eliminated as fire-making determines the final three. Heather is eliminated at fire.",
      episodeAirDate: "2021-12-15",
      episodeBoot: "Danny McCray, Ricard Foye, Heather Aldret"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Erika Casupanan defeats Deshawn Radden and Xander Hastings 7-1-0 to become the first Canadian and Filipino Sole Survivor.",
      episodeAirDate: "2021-12-15",
      episodeBoot: null
    }
  ],

  // Season 42
  [
    {
      episodeNumber: 1,
      episodeTitle: "Feels Like a Rollercoaster",
      episodeSummary: "Eighteen new players begin the new era with no knowledge of Season 41's twists. Jackson Fox is removed for medical reasons.",
      episodeAirDate: "2022-03-09",
      episodeBoot: "Jackson Fox (removed)"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Good and Guilty",
      episodeSummary: "Zach is eliminated as the Beware Advantages return. Marya Sherron struggles at camp.",
      episodeAirDate: "2022-03-16",
      episodeBoot: "Zach Wurtenberger"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Go for the Gusto",
      episodeSummary: "Marya's position weakens and she's voted out. The idol phrases create entertainment.",
      episodeAirDate: "2022-03-23",
      episodeBoot: "Marya Sherron"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Vibe of the Tribe",
      episodeSummary: "Jenny's alliance crumbles when her plan is exposed. Jenny Kim is voted out.",
      episodeAirDate: "2022-03-30",
      episodeBoot: "Jenny Kim"
    },
    {
      episodeNumber: 5,
      episodeTitle: "I'm Survivor Rich",
      episodeSummary: "Daniel's poor gameplay catches up to him at tribal council. Daniel Strunk is voted out.",
      episodeAirDate: "2022-04-06",
      episodeBoot: "Daniel Strunk"
    },
    {
      episodeNumber: 6,
      episodeTitle: "You Can't Hide on Survivor",
      episodeSummary: "Chanelle's risk at the summit backfires when she loses her vote. Chanelle Howell is voted out.",
      episodeAirDate: "2022-04-13",
      episodeBoot: "Chanelle Howell"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Devil You Do or the Devil You Don't",
      episodeSummary: "The merge brings new dynamics and hourglass twist returns. Lydia Meredith is voted out.",
      episodeAirDate: "2022-04-20",
      episodeBoot: "Lydia Meredith"
    },
    {
      episodeNumber: 8,
      episodeTitle: "You Better Be Wearing a Seatbelt",
      episodeSummary: "Rocksroy's controlling nature costs him allies. Rocksroy Bailey is voted out.",
      episodeAirDate: "2022-04-27",
      episodeBoot: "Rocksroy Bailey"
    },
    {
      episodeNumber: 9,
      episodeTitle: "See Ya Later, Scrambler",
      episodeSummary: "Tori's idol play saves her temporarily but she's targeted again. Tori Meehan is voted out.",
      episodeAirDate: "2022-05-04",
      episodeBoot: "Tori Meehan"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Tell a Good Lie, Not a Stupid Lie",
      episodeSummary: "Hai's control of the game ends when he's blindsided. Hai Giang is voted out.",
      episodeAirDate: "2022-05-11",
      episodeBoot: "Hai Giang"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Battle Royale",
      episodeSummary: "Drea's idol play at tribal is dramatic but not enough. Drea Wheeler is voted out.",
      episodeAirDate: "2022-05-18",
      episodeBoot: "Drea Wheeler"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Caterpillar to Butterfly",
      episodeSummary: "Omar and Lindsay are eliminated as the finale approaches. Maryanne's game shines.",
      episodeAirDate: "2022-05-25",
      episodeBoot: "Omar Zaheer, Lindsay Dolashewich"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Jonathan and Romeo are eliminated. Maryanne Oketch defeats Mike Turner and Romeo Escobar 7-1-0 with her masterful idol and advantage play.",
      episodeAirDate: "2022-05-25",
      episodeBoot: "Jonathan Young, Romeo Escobar"
    }
  ],

  // Season 43
  [
    {
      episodeNumber: 1,
      episodeTitle: "LIVIN",
      episodeSummary: "Eighteen new players begin their Survivor journey in Fiji. Morriah Young is the first voted out from Baka.",
      episodeAirDate: "2022-09-21",
      episodeBoot: "Morriah Young"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Lovable Curmudgeon",
      episodeSummary: "Justine is eliminated as the early game develops. Cody's quirky personality entertains his tribe.",
      episodeAirDate: "2022-09-28",
      episodeBoot: "Justine Brennan"
    },
    {
      episodeNumber: 3,
      episodeTitle: "I'll Sign the Divorce Papers",
      episodeSummary: "Nneka's challenge struggles make her a target. Nneka Ejere is voted out from Vesi.",
      episodeAirDate: "2022-10-05",
      episodeBoot: "Nneka Ejere"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Show No Mercy",
      episodeSummary: "Lindsay's game comes to an early end at Coco. Lindsay Carmine is voted out.",
      episodeAirDate: "2022-10-12",
      episodeBoot: "Lindsay Carmine"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Stop with All the Niceness",
      episodeSummary: "Geo's strategic game backfires when he overplays. Geo Bustamante is voted out.",
      episodeAirDate: "2022-10-19",
      episodeBoot: "Geo Bustamante"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Mergatory",
      episodeSummary: "Elie's scheming is exposed by Gabler. Elie Scott is voted out.",
      episodeAirDate: "2022-10-26",
      episodeBoot: "Elie Scott"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Bull in a China Shop",
      episodeSummary: "The merge brings the earn the merge twist. Dwight Moore is voted out.",
      episodeAirDate: "2022-11-02",
      episodeBoot: "Dwight Moore"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Proposterous",
      episodeSummary: "Jeanine's idol is exposed after Dwight's elimination. Jeanine Zheng is voted out.",
      episodeAirDate: "2022-11-09",
      episodeBoot: "Jeanine Zheng"
    },
    {
      episodeNumber: 9,
      episodeTitle: "What About the Big Girls?",
      episodeSummary: "James's challenge dominance makes him a target. James Jones is voted out.",
      episodeAirDate: "2022-11-16",
      episodeBoot: "James Jones"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Get That Money, Baby",
      episodeSummary: "Ryan makes a move too early and is exposed. Ryan Medrano is voted out.",
      episodeAirDate: "2022-11-23",
      episodeBoot: "Ryan Medrano"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Telenovela",
      episodeSummary: "Noelle's inspirational story isn't enough to save her. Noelle Lambert is voted out.",
      episodeAirDate: "2022-11-30",
      episodeBoot: "Noelle Lambert"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Finale",
      episodeSummary: "Sami, Owen, Cody, and Karla are eliminated as Jesse makes big moves. Jesse's idol blunder at fire-making costs him.",
      episodeAirDate: "2022-12-07",
      episodeBoot: "Sami Layadi, Owen Knight, Cody Assenmacher, Karla Cruz Godoy"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Jesse Lopez is eliminated at fire-making. Gabler defeats Cassidy Clark and Owen Knight 7-1-0 to become the oldest new era winner at 52.",
      episodeAirDate: "2022-12-14",
      episodeBoot: "Jesse Lopez"
    }
  ],

  // Season 44
  [
    {
      episodeNumber: 1,
      episodeTitle: "I Can't Wait to See Jeff",
      episodeSummary: "Eighteen new players with no knowledge of recent seasons begin. Maddy Pomilla is voted out first from Ratu.",
      episodeAirDate: "2023-03-01",
      episodeBoot: "Maddy Pomilla"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Two Dorky Magnets",
      episodeSummary: "Bruce is medically evacuated due to a head injury during a challenge. His departure shocks his tribe.",
      episodeAirDate: "2023-03-08",
      episodeBoot: "Bruce Perreault (evacuated)"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Sneaky Little Snake",
      episodeSummary: "Helen Li's challenge struggles make her a target at Soka. Helen Li is voted out.",
      episodeAirDate: "2023-03-15",
      episodeBoot: "Helen Li"
    },
    {
      episodeNumber: 4,
      episodeTitle: "I'm Felicia",
      episodeSummary: "Claire's strategic play backfires when she's caught scheming. Claire Rafson is voted out.",
      episodeAirDate: "2023-03-22",
      episodeBoot: "Claire Rafson"
    },
    {
      episodeNumber: 5,
      episodeTitle: "The Third Turd",
      episodeSummary: "Matthew's shoulder injury sidelines him but he continues playing. Matthew Grinstead-Mayle is medically evacuated.",
      episodeAirDate: "2023-03-29",
      episodeBoot: "Matthew Grinstead-Mayle (evacuated)"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Survivor With a Capital S",
      episodeSummary: "The merge shakeup begins and alliances form. Josh Wilder is voted out.",
      episodeAirDate: "2023-04-05",
      episodeBoot: "Josh Wilder"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Genie in a Bottle",
      episodeSummary: "Kane's quiet game ends when he becomes a target. Kane Fritzler is voted out.",
      episodeAirDate: "2023-04-12",
      episodeBoot: "Kane Fritzler"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Fire and Ice",
      episodeSummary: "Brandon's idol play saves him temporarily. Brandon Cottom is voted out.",
      episodeAirDate: "2023-04-19",
      episodeBoot: "Brandon Cottom"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Under the Mango Tree",
      episodeSummary: "Danny's physical threat level costs him in the game. Danny Massa is voted out.",
      episodeAirDate: "2023-04-26",
      episodeBoot: "Danny Massa"
    },
    {
      episodeNumber: 10,
      episodeTitle: "I'm Not Worthy",
      episodeSummary: "Frannie's showmance with Matt puts a target on her. Frannie Marin is voted out.",
      episodeAirDate: "2023-05-03",
      episodeBoot: "Frannie Marin"
    },
    {
      episodeNumber: 11,
      episodeTitle: "I'm in the Hot Seat",
      episodeSummary: "Jaime's fake idol excitement becomes a viral meme. Jaime Lynn Ruiz is voted out.",
      episodeAirDate: "2023-05-10",
      episodeBoot: "Jaime Lynn Ruiz"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Congratulations to You",
      episodeSummary: "Lauren fights for survival but is eliminated. Carson and Heidi follow.",
      episodeAirDate: "2023-05-17",
      episodeBoot: "Lauren Harpe, Carson Garrett, Heidi Lagares-Greenblatt"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Carolyn's entertaining gameplay wins fan hearts but not the jury. Yamato 'Yam Yam' Matsuda defeats Carolyn Wiger and Heidi Lagares-Greenblatt 7-1-0.",
      episodeAirDate: "2023-05-24",
      episodeBoot: "Carolyn Wiger"
    }
  ],

  // Season 45
  [
    {
      episodeNumber: 1,
      episodeTitle: "This Is Survivor",
      episodeSummary: "Eighteen new players plus returning evacuee Bruce Perreault begin. Hannah Rose is the first voted out from Lulu.",
      episodeAirDate: "2023-09-27",
      episodeBoot: "Hannah Rose"
    },
    {
      episodeNumber: 2,
      episodeTitle: "No Immunity, No Problem",
      episodeSummary: "Brandon struggles to adapt to the game. Brandon Donlon is voted out from Lulu.",
      episodeAirDate: "2023-10-04",
      episodeBoot: "Brandon Donlon"
    },
    {
      episodeNumber: 3,
      episodeTitle: "No Such Thing as a Sure Thing",
      episodeSummary: "Sabiyah's idol misplay is costly when she's blindsided. Sabiyah Broderick is voted out.",
      episodeAirDate: "2023-10-11",
      episodeBoot: "Sabiyah Broderick"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Rep Your City",
      episodeSummary: "Sean's injury limits his game at Lulu tribe. Sean Edwards is voted out.",
      episodeAirDate: "2023-10-18",
      episodeBoot: "Sean Edwards"
    },
    {
      episodeNumber: 5,
      episodeTitle: "I'm Not Worthy",
      episodeSummary: "Brando's strategic overplaying backfires at tribal. Brando Meyer is voted out.",
      episodeAirDate: "2023-10-25",
      episodeBoot: "Brando Meyer"
    },
    {
      episodeNumber: 6,
      episodeTitle: "The Game Within the Game",
      episodeSummary: "J. Maya's challenge struggles continue on Belo. J. Maya is voted out.",
      episodeAirDate: "2023-11-01",
      episodeBoot: "J. Maya"
    },
    {
      episodeNumber: 7,
      episodeTitle: "The Past Can Eat You Alive",
      episodeSummary: "The merge brings new dynamics and power shifts. Sifu Alsup is voted out.",
      episodeAirDate: "2023-11-08",
      episodeBoot: "Sifu Alsup"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Brought a Bazooka to a Tea Party",
      episodeSummary: "Kellie's strategic game is respected but she's too threatening. Kellie Nalbandian is voted out.",
      episodeAirDate: "2023-11-15",
      episodeBoot: "Kellie Nalbandian"
    },
    {
      episodeNumber: 9,
      episodeTitle: "A Brutal Blindside",
      episodeSummary: "Bruce's second chance ends abruptly in a blindside. Bruce Perreault is voted out.",
      episodeAirDate: "2023-11-22",
      episodeBoot: "Bruce Perreault"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Chaos Is King",
      episodeSummary: "Katurah's feud with Bruce continues even after his elimination. Kendra McQuarrie is voted out.",
      episodeAirDate: "2023-11-29",
      episodeBoot: "Kendra McQuarrie"
    },
    {
      episodeNumber: 11,
      episodeTitle: "This Game Has Changed",
      episodeSummary: "Kaleb and Emily fight for survival as the endgame approaches. Kaleb Gebrewold is voted out.",
      episodeAirDate: "2023-12-06",
      episodeBoot: "Kaleb Gebrewold"
    },
    {
      episodeNumber: 12,
      episodeTitle: "One Last Shot",
      episodeSummary: "Emily, Jake, and Julie are eliminated as the finale intensifies. Austin and Dee dominate.",
      episodeAirDate: "2023-12-13",
      episodeBoot: "Emily Flippen, Jake O'Kane, Julie Alley"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Dee Valladares defeats Austin Li Coon and Katurah Topps 5-3-0 to become the Sole Survivor. Her strategic gameplay and final tribal performance dominate.",
      episodeAirDate: "2023-12-20",
      episodeBoot: "Austin Li Coon, Katurah Topps"
    }
  ],

  // Season 46
  [
    {
      episodeNumber: 1,
      episodeTitle: "I'll Go Coconuts, I'm Crazy",
      episodeSummary: "Eighteen new players begin their Survivor journey. David Jelinsky quits on day 2.",
      episodeAirDate: "2024-02-28",
      episodeBoot: "David Jelinsky (quit)"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Episode 2",
      episodeSummary: "Randen is medically evacuated due to a back injury. Jelena Golubovik is voted out.",
      episodeAirDate: "2024-03-06",
      episodeBoot: "Randen Montalvo (evacuated), Jelena Golubovik"
    },
    {
      episodeNumber: 3,
      episodeTitle: "It's Okay to Lie",
      episodeSummary: "Bhanu's emotional gameplay and revealing too much concerns his tribe. Bhanu Gopal is voted out from Yanu.",
      episodeAirDate: "2024-03-13",
      episodeBoot: "Bhanu Gopal"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Don't Be Scared of This Challenge",
      episodeSummary: "Jess tries to navigate shifting alliances on Siga. Jess Chong is voted out.",
      episodeAirDate: "2024-03-20",
      episodeBoot: "Jess Chong"
    },
    {
      episodeNumber: 5,
      episodeTitle: "This Is My House",
      episodeSummary: "Moriah's challenge struggles hurt her position. Moriah Gaynor is voted out from Siga.",
      episodeAirDate: "2024-03-27",
      episodeBoot: "Moriah Gaynor"
    },
    {
      episodeNumber: 6,
      episodeTitle: "If You're Happy and You Know It",
      episodeSummary: "Tim's strategic play backfires when exposed. Tim Spicer is voted out.",
      episodeAirDate: "2024-04-03",
      episodeBoot: "Tim Spicer"
    },
    {
      episodeNumber: 7,
      episodeTitle: "I Came to Play",
      episodeSummary: "The merge brings drama and new alliances. Hunter McKnight is voted out.",
      episodeAirDate: "2024-04-10",
      episodeBoot: "Hunter McKnight"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Hide Your Idols",
      episodeSummary: "Soda's strong social game isn't enough to save her. Soda Thompson is voted out.",
      episodeAirDate: "2024-04-17",
      episodeBoot: "Soda Thompson"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Epic Idol Moment",
      episodeSummary: "Tevin's idol search fails and he's targeted. Tevin Davis is voted out.",
      episodeAirDate: "2024-04-24",
      episodeBoot: "Tevin Davis"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Run the Jungle",
      episodeSummary: "Tiffany's strategic gameplay comes to an end. Tiffany Nicole Ervin is voted out.",
      episodeAirDate: "2024-05-01",
      episodeBoot: "Tiffany Nicole Ervin"
    },
    {
      episodeNumber: 11,
      episodeTitle: "There's No 'I' in Team",
      episodeSummary: "Venus and Q battle for position in the endgame. Venus Vafa is voted out.",
      episodeAirDate: "2024-05-08",
      episodeBoot: "Venus Vafa"
    },
    {
      episodeNumber: 12,
      episodeTitle: "One Perfect Plan",
      episodeSummary: "Q, Liz, and Maria are eliminated as the finale intensifies. The final three is set.",
      episodeAirDate: "2024-05-15",
      episodeBoot: "Q Burdette, Liz Wilcox, Maria Shrime Gonzalez"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Kenzie Petty defeats Ben Katzman and Charlie Davis 5-3-0 to become the Sole Survivor. Her social game dominates.",
      episodeAirDate: "2024-05-22",
      episodeBoot: "Ben Katzman"
    }
  ],

  // Season 47
  [
    {
      episodeNumber: 1,
      episodeTitle: "Episode 1",
      episodeSummary: "Eighteen new castaways begin their Survivor journey in Fiji. Jon Lovett is the first voted out from Lavo.",
      episodeAirDate: "2024-09-18",
      episodeBoot: "Jon Lovett"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Episode 2",
      episodeSummary: "The tribes adapt to the harsh conditions. TK Foster is voted out from Tuku.",
      episodeAirDate: "2024-09-25",
      episodeBoot: "TK Foster"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Episode 3",
      episodeSummary: "Alliances form and strategies develop. Aysha Welch is voted out from Lavo.",
      episodeAirDate: "2024-10-02",
      episodeBoot: "Aysha Welch"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Episode 4",
      episodeSummary: "Kishan battles to stay in the game at Lavo. Kishan Patel is voted out.",
      episodeAirDate: "2024-10-09",
      episodeBoot: "Kishan Patel"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Episode 5",
      episodeSummary: "Anika's position in the game weakens. Anika Dhar is voted out from Gata.",
      episodeAirDate: "2024-10-16",
      episodeBoot: "Anika Dhar"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Episode 6",
      episodeSummary: "Rome's scheming catches up to him at Lavo. Rome Cooney is voted out.",
      episodeAirDate: "2024-10-23",
      episodeBoot: "Rome Cooney"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Episode 7",
      episodeSummary: "The merge shakeup begins with new dynamics. Tiyana Hallums is voted out.",
      episodeAirDate: "2024-10-30",
      episodeBoot: "Tiyana Hallums"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Episode 8",
      episodeSummary: "Sierra becomes a target at the merge. Sierra Wright is voted out.",
      episodeAirDate: "2024-11-06",
      episodeBoot: "Sierra Wright"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Episode 9",
      episodeSummary: "Sol's game comes to an end. Sol Yi is voted out.",
      episodeAirDate: "2024-11-13",
      episodeBoot: "Sol Yi"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Episode 10",
      episodeSummary: "Gabe's strategic control ends when he's blindsided. Gabe Ortis is voted out.",
      episodeAirDate: "2024-11-20",
      episodeBoot: "Gabe Ortis"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Episode 11",
      episodeSummary: "Kyle fights for survival in the endgame. Kyle Ostwald is voted out.",
      episodeAirDate: "2024-11-27",
      episodeBoot: "Kyle Ostwald"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Episode 12",
      episodeSummary: "Andy and Caroline are eliminated as the finale approaches. The final five is set.",
      episodeAirDate: "2024-12-04",
      episodeBoot: "Andy Rueda, Caroline Vidmar"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Episode 13",
      episodeSummary: "Teeny and Genevieve are eliminated. The final three face the jury.",
      episodeAirDate: "2024-12-11",
      episodeBoot: "Teeny Chirichillo, Genevieve Mushaluk"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Sue is eliminated at fire-making. Rachel LaMont defeats Sam Phalen and Sue Smey 7-1-0 to become the Sole Survivor with her challenge dominance.",
      episodeAirDate: "2024-12-18",
      episodeBoot: "Sue Smey"
    }
  ],

  // Season 48
  [
    {
      episodeNumber: 1,
      episodeTitle: "Episode 1",
      episodeSummary: "Eighteen new castaways begin in Fiji with 90-minute episodes. Charity Nelms is voted out first from Siga.",
      episodeAirDate: "2025-02-26",
      episodeBoot: "Charity Nelms"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Episode 2",
      episodeSummary: "The tribes battle for immunity in new challenges. Star Toomey is voted out from Siga.",
      episodeAirDate: "2025-03-05",
      episodeBoot: "Star Toomey"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Episode 3",
      episodeSummary: "Alliances start to form across the three tribes. Thomas Krottinger is voted out.",
      episodeAirDate: "2025-03-12",
      episodeBoot: "Thomas Krottinger"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Episode 4",
      episodeSummary: "Shauhin fights to stay in the game. Shauhin Davari is voted out.",
      episodeAirDate: "2025-03-19",
      episodeBoot: "Shauhin Davari"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Episode 5",
      episodeSummary: "Kevin's strategic play ends when he's targeted. Kevin Leung is voted out.",
      episodeAirDate: "2025-03-26",
      episodeBoot: "Kevin Leung"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Episode 6",
      episodeSummary: "The merge approaches with shifting dynamics. Mitch Guerra is voted out.",
      episodeAirDate: "2025-04-02",
      episodeBoot: "Mitch Guerra"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Episode 7",
      episodeSummary: "Bianca's game comes to an end at the merge. Bianca Roses is voted out.",
      episodeAirDate: "2025-04-09",
      episodeBoot: "Bianca Roses"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Episode 8",
      episodeSummary: "Chrissy fights to survive post-merge. Chrissy Sarnowsky is voted out.",
      episodeAirDate: "2025-04-16",
      episodeBoot: "Chrissy Sarnowsky"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Episode 9",
      episodeSummary: "Mary's strategic game ends when she's blindsided. Mary Zheng is voted out.",
      episodeAirDate: "2025-04-23",
      episodeBoot: "Mary Zheng"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Episode 10",
      episodeSummary: "The endgame intensifies as alliances shift. Justin Pickel is voted out.",
      episodeAirDate: "2025-04-30",
      episodeBoot: "Justin Pickel"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Episode 11",
      episodeSummary: "Cedrek and Saiounia are eliminated as the finale approaches. Strategy intensifies.",
      episodeAirDate: "2025-05-07",
      episodeBoot: "Cedrek McFadden, Saiounia Hughley"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Episode 12",
      episodeSummary: "David and Kamilla are eliminated in the finale. The final three is set.",
      episodeAirDate: "2025-05-14",
      episodeBoot: "David Kinne, Kamilla Karthigesu"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Reunion",
      episodeSummary: "Eva is eliminated at fire-making. Kyle Fraser defeats Eva Erickson and Joe Hunter 5-2-1 to become the Sole Survivor.",
      episodeAirDate: "2025-05-21",
      episodeBoot: "Eva Erickson"
    }
  ],

  // Season 49
  [
    {
      episodeNumber: 1,
      episodeTitle: "Episode 1",
      episodeSummary: "Eighteen new castaways begin their Survivor journey in Fiji. Anne Roylance is the first voted out.",
      episodeAirDate: "2025-09-24",
      episodeBoot: "Anne Roylance"
    },
    {
      episodeNumber: 2,
      episodeTitle: "Episode 2",
      episodeSummary: "Jawan Pitts is eliminated as the early game develops. Alliances begin forming.",
      episodeAirDate: "2025-10-01",
      episodeBoot: "Jawan Pitts"
    },
    {
      episodeNumber: 3,
      episodeTitle: "Episode 3",
      episodeSummary: "The tribes face challenges and Steven is targeted. Steven Rojas is voted out.",
      episodeAirDate: "2025-10-08",
      episodeBoot: "Steven Rojas"
    },
    {
      episodeNumber: 4,
      episodeTitle: "Episode 4",
      episodeSummary: "Jake Latimer is medically evacuated due to injury. His departure shocks his tribe.",
      episodeAirDate: "2025-10-15",
      episodeBoot: "Jake Latimer (evacuated)"
    },
    {
      episodeNumber: 5,
      episodeTitle: "Episode 5",
      episodeSummary: "Kristina Mills fights for survival but is eliminated. The game intensifies.",
      episodeAirDate: "2025-10-22",
      episodeBoot: "Kristina Mills"
    },
    {
      episodeNumber: 6,
      episodeTitle: "Episode 6",
      episodeSummary: "Haley faces elimination as her position weakens. Haley Ross is voted out.",
      episodeAirDate: "2025-10-29",
      episodeBoot: "Haley Ross"
    },
    {
      episodeNumber: 7,
      episodeTitle: "Episode 7",
      episodeSummary: "Jason's game comes to an end pre-merge. Jason Treul is voted out.",
      episodeAirDate: "2025-11-05",
      episodeBoot: "Jason Treul"
    },
    {
      episodeNumber: 8,
      episodeTitle: "Episode 8",
      episodeSummary: "Annie Davis is voted out at the merge. The game intensifies post-merge.",
      episodeAirDate: "2025-11-12",
      episodeBoot: "Annie Davis"
    },
    {
      episodeNumber: 9,
      episodeTitle: "Episode 9",
      episodeSummary: "Nate's strategic play ends when he's blindsided. Nate Johnson is voted out.",
      episodeAirDate: "2025-11-19",
      episodeBoot: "Nate Johnson"
    },
    {
      episodeNumber: 10,
      episodeTitle: "Episode 10",
      episodeSummary: "Rome Kroll is eliminated as the endgame approaches. Strategy intensifies.",
      episodeAirDate: "2025-11-26",
      episodeBoot: "Rome Kroll"
    },
    {
      episodeNumber: 11,
      episodeTitle: "Episode 11",
      episodeSummary: "Jeremiah battles to survive but is eliminated. Jeremiah Ing is voted out.",
      episodeAirDate: "2025-12-03",
      episodeBoot: "Jeremiah Ing"
    },
    {
      episodeNumber: 12,
      episodeTitle: "Episode 12",
      episodeSummary: "Alex Moore is eliminated as the finale approaches. The final five is set.",
      episodeAirDate: "2025-12-10",
      episodeBoot: "Alex Moore"
    },
    {
      episodeNumber: 13,
      episodeTitle: "Episode 13",
      episodeSummary: "Sophi and Rizo are eliminated. The final three face the jury.",
      episodeAirDate: "2025-12-17",
      episodeBoot: "Sophi Balerdi, Rizo Velovic"
    },
    {
      episodeNumber: 14,
      episodeTitle: "Reunion",
      episodeSummary: "Savannah Louie defeats Sage Ahrens-Nichols and Sophi Balerdi 5-2-1 to become the Sole Survivor. Her strategic control of the game is dominant.",
      episodeAirDate: "2025-12-17",
      episodeBoot: null
    }
  ]
];
