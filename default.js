
var fs = require('fs');
var levels = {
	1 : {
		"title" : "The Wookiee Civilization",
		"image" : "level1.png",
		"total" : 2,
		"unlock" : true
	},

	2 : {
		"title" : "The Romulan Civilization",
		"image" : "level2.png",
		"total" : 3,
		"unlock" : false
	},

	3 : {
		"title" : "The Na'Vi Civilization",
		"image" : "level3.png",
		"total" : 4,
		"unlock" : false
	},

	4 : {
		"title" : "The Vulcan Civilization",
		"image" : "level4.png",
		"total" : 12,
		"unlock" : false
	}
};


var currentUser = {
	"score" : 0,
	"levelsUnlocked" : [],
	"currentLevel" : 1,
	"level1" : 0,
	"level2" : 0,
	"level3" : 0,
	"level4" : 0
};

var questions = {
	1 : [
	{
		"id" : 1,
		"title" : "1. Chewbacca and Strings",
		"question" : "Everyone knows who Chewbacca is. He is a brave warrior and a loyal friend. What many people do not know is that Chewbacca has OCD and he does not like bad strings. A bad string has a mix of uppercase and lowercase letters in one word. That's why he decided to convert some strings he had into good strings so that it either only consisted of lowercase letters or, vice versa, only of uppercase ones. At that as little as possible letters should be changed in the word. For example, the word DeaThStar be replaced with deathstar, and the word HaN - with HAN. If a word contains an equal number of uppercase and lowercase letters, you should replace all the letters with lowercase ones. For example, lUkE should be replaced by luke. Help your friend, Chewbacca, in converting his strings.<h3>Input</h3>The first line contains a word s - it consists of uppercase and lowercase Latin letters and possesses the length from 1 to 100.<h3>Output</h3>Print the corrected word s. If the given word s has strictly more uppercase letters, make the word written in the uppercase register, otherwise - in the lowercase one.<h3>Examples</h3><h3>Input</h3> DeaThStar<h3>Output</h3> deathstar<h3>Input</h3>HaN<h3>Output</h3> HAN<h3>Testcase</h3>EBWOVSNLYTWWXrnovgugogtjahnmatomubebyxakas",
		"answer" : "1d2ac7ede203a865f54005fc45f01fb5",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 2,
		"title" : "2. Palin",
		"question" : "Wookies are known to be brave and kind hearted. But they are weak at math and lately wookies started realizing that learning math is good for them. So, Chewbacca's math teacher gave him some homework. Chewbacca has to calculate the sum of all palindrome numbers between 1 and 1000. Because Chewbacca is new to Math, he is having a hard time. Can you help him find the sum by writing a program to calculate the sum?",
		"answer" : "424351fe60d01ce7de0fb0e00956b222",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 3,
		"title" : "3. Just Wookiee Dreams",
		"question" : "'One stormtrooper. Two stormtrooper. Three stormtrooper', - Chewbacca was counting. He had trouble falling asleep, and he got bored of counting lambs when he was forty.However, just counting the stormtrooper was boring as well, so he entertained himself at best he could. Tonight he imagined that all the stormtroopers were here to steal the Falcon, and he was fighting them off. Every k-th stormtrooper got punched in the face with his enormous fist. Every l-th stormtrooper got blasted through the balcony door by blaster rifle. Every m-th stormtrooper got his legs trampled by his stomp. Finally, he threatened every n-th stormtrooper with his growl, and he withdrew in panic.How many imaginary stormtroopers suffered moral or physical damage tonight, if Chewbacca counted a total of d stormtroopers?<h3>Input</h3>Input data contains integer numbers k,l,m,n and d, each number in a separate line (1<=k,l,m,n<=10, 1<=d<=10^5).<h3>Output</h3>Output the number of damaged stormtroopers.<h3>Examples</h3><h3>Input</h3> 1<br>2<br>3<br>4<br>12<br><h3>Output</h3> 12<h3>Input</h3> 2<br>3<br>4<br>5<br>24<br><h3>Output</h3> 17<h3>Note</h3>In the first case every first stormtrooper got punched with fist. Some of the stormtroopers suffered from other reasons as well, but the fist alone would be enough.In the second case stormtroopers 1, 7, 11, 13, 17, 19 and 23 escaped unharmed.<h3>Testcase</h3>6<br>4<br>9<br>8<br>72628<br>",
		"answer" : "d6c4516dce9459a651944de3729e7427",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 4,
		"title" : "4. Wookiee Epidemic",
		"question" : "You are tracking the population of wookiees. Specifically, you maintain history of the population at several instants and record them in your notebook. Today, you have recorded N such records hi, h2, ..., hN, denoting the population of Kashyyyk at several instants. These records mean that population was first h1, then started changing to h2, then from h2 to h3 and so on. The wookiees have advanced healthcare, so you can assume that the population will smoothly increase/decrease from hi to h(i+1) with a constant speed. You can see that during this period, the population will cover all possible values in the range [min(hi,h(i+1)), max(hi,h(i+1))] (both inclusive). It is easy to see that the population will be at all possible values in the range exactly a single instant of time during this increase/decrease.You are interested in finding the maximum integer K such that the population was at some value exactly K times during the increase and decrease.<h3>Input</h3>There is a single test case.First line of the input contains an integer N denoting the number of records of population of Kashyyyk.Second line contains N space separated integers denoting h1, h2, ..., hN.<h3>Output</h3>Output a single maximum integer K in one line, such that the population was at some value exactly K times during the increase and decrease.<h3>Example</h3><h3>Input: </h3>5<br>1 2 3 2 3<br><h3>Output: </h3>3<h3>Explanation</h3>There are infinitely many values at which the population was 3 times during the increase/decrease, for example 2.5, 2.1. Notice that the population was only 2 times at value 2. Moreover, there are no value at which the population was more than 3 times, so the answer is 3.<h3>Testcase</h3>25<br>1 12 2 11 3 6 7 4 3 23 11 23 43 67 3 1 2 8 7 6 5 9 23 1 7<br>",
		"answer" : "c51ce410c124a10e0db5e4b97fc2af39",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	}
	],
	2 : [
	{
		"id" : 6,
		"title" : "1. MasterCode Romulus",
		"question" : "The empress of Romulus is hungry! And her last cook was killed because he didn't follow the royal recipe for compote. The task of preparing the royal meal for the empress is given to you. Follow the recipe and save your life! You have a lemons, b apples and c pears. You've decided to cook a compote. According to the recipe the fruits should be in the ratio 1:2:4. It means that for each lemon in the compote should be exactly 2 apples and exactly 4 pears. You can't crumble up, break up or cut these fruits into pieces. These fruits - lemons, apples and pears - should be put in the compote as whole fruits.Your task is to determine the maximum total number of lemons, apples and pears from which Nikolay can cook the compote. It is possible that Nikolay can't use any fruits, in this case print 0.<h3>Input</h3>The first line contains the positive integer a (1<=a<=1000) - the number of lemons you have.The second line contains the positive integer b (1<b <=1000) - the number of apples you have.The third line contains the positive integer c (1<=c <=1000) - the number of pears you have.<h3>Output</h3>Print the maximum total number of lemons, apples and pears from which you can cook the compote.<h3>Examples</h3><h3>Input</h3> 2<br>5<br>7<br><h3>Output</h3> 7<h3>Input</h3>4<br>7<br>13<br><h3>Output</h3>21<h3>Test case</h3>237<br>487<br>517<br>",
		"answer" : "aa169b49b583a2b5af89203c2b78c67c",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 7,
		"title" : "2. Choosing Symbol Pairs",
		"question" : "There has been a population boost in the universe and therefore one race has to be irradiated. We are testing the limits of every race and the race that comes last will be irradiated from existence! The task to save the Romulan people is given to their most trusted coder, you!! Your problem is:There is a given string S consisting of N symbols. Your task is to find the number of ordered pairs of integers i and j such that 1. 1<=i,j<=N 2. S[i]=S[j], that is the i-th symbol of string S is equal to the j-th.<h3>Input</h3>The single input line contains S, consisting of lowercase Latin letters and digits. It is guaranteed that string S in not empty and its length does not exceed 105.<h3>Output</h3>Print a single number which represents the number of pairs i and j with the needed property. Pairs(x,y) and (y,x) should be considered different, i.e. the ordered pairs count.<h3>Examples</h3><h3>Input</h3>great10<h3>output</h3> 7<h3>Input</h3> aaaaaaaaaa<h3>output</h3> 100<h3>Testcase</h3> 00000000000000000000000",
		"answer" : "37f0e884fbad9667e38940169d0a3c95",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 8,
		"title" : "3. The Enterprise in Danger!",
		"question" : "Near the end of the Battle of Earth when the Jellyfish collided with the Narada, it ignited the entire Red Matter on board the Jellyfish, creating a blackhole. The Enterprise fired at the Narada, breaking it up and hastening its consumption by the black hole and seeing the end of Nero, the Romulan miner, who was the Captain of the Narada. After its destruction, the Enterprise found itself stuck in the gravity well of the Black Hole, which it can't seem to escape even at maximum warp. To escape, the ship's warp core segments must be ejected and detonated near the black hole well. Here's what you have to do to bring The Enterprise to safety!You are given a digit string S. You need to count the number of substrings of S, which are palindromes without leading zeros and can be divided by 3 without a remainder.A string is a palindrome if it reads the same backward as forward. A string is a palindrome without leading zeros if it reads the same backward as forward and doesn't start with symbol '0'. A string is a digit string, if it doesn't contain any symbols except '0', '1', '2', ..., '9'. Please, note that you should consider string '0' as a palindrome without leading zeros. <h3>Input</h3>The first line of the input contains a digit string S.<h3>Output</h3>Your output should contain the only integer, denoting the number of substrings of S, which are palindromes without leading zeros and can be divided by 3 without a remainder.<h3>Constraints</h3>1<=|S| <=1000000<h3>Example</h3><h3>Input:</h3>1045003<h3>Output:</h3>4<h3>Explanation</h3>In the example you should count S[2..2]='0', S[5..5]='0', S[6..6]='0' and S[7..7]='3'. <h3>Testcase</h3>78954634239933393990789065346643443",
		"answer" : "6364d3f0f495b6ab9dcf8d3b5c6e0b01",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"id" : 9,
		"title" : "4. Romulan Starship in Sight",
		"question" : "The Romulans are xenophobic. They like to conquer other galaxies and planets, rather than establish diplomatic ties with them. You happen to be on an advanced Starship and you've been spotted by a Romulan Starship and they fire their Plasma Torpedoes at your Starship. But your defence shields and mechanism is quite advanced, which can combine a certain number of residual shields, formed when your Starship is hit, to form one new shield.Your Starship has 'a' shields. When hit, one shield goes out and its residue remains, the remaining rearrange to encompass the ship. Your Starship uses 'b' went out shields into one new shield. Thus, this new shield can be used like any other shield.How many shields can your Starship use to defend itself against the Romulan torpedoes on a mission from which you cannot immediately evade? <h3>Input</h3>The single line contains two integers, a and b (1<=a<=1000; 2<=b<=1000).<h3>Output</h3>Print a single integer - the number of shields you can use before becoming defenseless.<h3>Examples</h3><h3>Input</h3> 4 2<h3>Output</h3> 7<h3>Input</h3> 6 3<h3>Output</h3> 8<h3>Note</h3>Consider the first sample. The first four Shields defend the ship, then four shattered shields combine to make two new ones and they are used. When these shields go out, one more can be made from their residues. Overall, the Starship can use 7 shields before becoming defenseless.<h3>Testcase</h3>777 17",
		"answer" : "d554f7bb7be44a7267068a7df88ddd20",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false	
	},{
		"id" : 10,
		"title" : "5. The Rich Romulan",
		"question" : "In Romulus they have a very strange monetary system.Each Romulan gold coin has an integer number written on it. A coin n can be exchanged in the Grand Romulan Bank into three coins: n/2, n/3 and n/4. But these numbers are all rounded down (the Banks have to make a profit, after all the Banks always win!).You can also sell Romulan coins for Vulcan Silver (vs) . The exchange rate is 1:1. But you cannot buy Romulan coins.You have one gold coin. What is the maximum amount of Vulcan Silver you can get for it?<h3>Input</h3>The input will contain a single line with a number n, 0 <=n <=1 000 000 000. It is the number written on your Romulan coin.<h3>Output</h3>For each test case output a single line, containing the maximum amount of Vulcan Silver you can make.<h3>Example</h3><h3>Input:</h3>12<h3>Output:</h3>13You can change 12 into 6, 4 and 3, and then change these into vs6+vs4+vs3=vs13. If you try changing the coin 2 into 3 smaller coins, you will get 1, 0 and 0, and later you can get no more than vs1 out of them. It is better just to change the 2 coin directly into vs2.<h3>Testcase</h3>424552364364563456",
		"answer" : "449400ddcc313e50c51612f7275bfa06",
		
		"tries" : 0,
		"answered" : false,
		"correct" : false
	}
	],
	3 : [
	{
		"title" : "1. Alien Shift",
		"question" :"The Na'vi are a race of sentient extraterrestrial humanoids who inhabit the lush jungle moon of Pandora. The Na'vi are approximately 3 meters with large eyes and big tails. The Na'vi have failed to develop tools and weapons for purposes beyond primitive warfare with surrounding clans and hunting / survival. For a race that is so connected to all other races, war would seem to be unlikely, but not unheard of. But the Na'vi are known for display of technology far beyond their age, for example crossbow.In a war with their neighboring clan, the Na'vi used the crossbows. The crossbow is a weapon which is not developed until the 4th - 6th century by humans. So, they don't want the crossbows to get into the hands of the enemies. The crossbows are fallen at points (0,0) , (1,0) ,(2,0)…(N,0). You will start at (0, 0). First, you walk to the right most crossbow, collect it. Then you walk to the left most crossbow, collect it. Then again to the right most and so on. You will stop after collecting all crossbows. You want to know how much distance you walked in the process. Note that distance between (a,0) and (b,0) is |a-b|.<h3>Input</h3>The first line of the input contains single integer N.<h3>Output</h3>Output the distance you walked.<h3>Constraints</h3>1<=N<10^5<h3>Example</h3><h3>Input</h3>2<h3>Output</h3>5<h3>Explanation</h3>You are initially at (0, 0)Right most crossbow is (2, 0). Distance=2.Now you are at (2, 0).Left most crossbow is (0, 0). Distance=2.Now you are at (0, 0)Right most crossbow is (1, 0). Distance=1.Now you are at (1, 0) and all crossbows are collected.Total distance walked=5.<h3>Testcase</h3>7654" ,
		"answer" : "d2b314bf7cd6082cac7333a6be550ca9",

		"tries" : 0,
		"answered" :false ,
		"correct" : false
	},
	{
		"title" : "2. Na'Vi Warriors",
		"question" : "Na'vi warriors are lined up for a memory test. They are numbered from 0 to N-1 from left to right.In the test, there are M rounds. In each round, Captain selects one position. The warrior at that position will be numbered 0. All the warriors to the right of selected position will be numbered one greater than the warrior to his left. All the warriors to the left of selected position will be numbered one greater than the warrior to his right. eg. if N=6 and selected position is 3, then the numbering will be [3, 2, 1, 0, 1, 2].After M rounds, leader asked each warrior to shout out the greatest number he was assigned during the M rounds. In order to check the correctness, leader asked you to produce the correct values for each warrior (That is the correct value each warrior should shout out).<h3>Input</h3>First line contains two integers, N and M.Second line contains M integers, the positions selected by leader, in that order.<h3>Output</h3>Output one line with N space separated integers.<h3>Example</h3><h3>Input</h3>4 1<br>1<h3>Output</h3>1 0 1 2<h3>Testcase</h3>12 12<br>23 4 21 2 4 7 5 8 9 65 26 67",
		"answer" : "72510c6835207ce67e7cee45a44bafd4",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "3. Help Jake! Neytiri is angry.",
		"question" : "Jake and Neytiri had a huge fight. Neytiri is very angry at Jake and decides to reside in 'The Tree of Souls' untill Jake decides to apologise. The Tree of Souls is a magical place and is full of challenges. Jake has to pass N levels before he can get to Neytiri and convince her to leave her abode at the Tree of Souls. After each level, he gets a few flags to carry along. They can either all be Eywa's flags asking Neytiri to stay with The Tree of Souls OR all of Kelutral (or the Hometree). The magic of The Tree of Souls forces Jake to carry the flags irrespective of which place they belong to. Neytire will not leave with Jake unless she can trust him again. She will trust him only if the number of Eywa's flags he is carrying is atleast as much as the number of Kelutral's flags.Jake gets ai flags at the end of the ith level. Probability that flags received at the end of the ith level will be Eywa's flags is pi. Your task is to tell Jake what is the probability that Neytiri will trust him once he reaches her.<h3>Input:</h3>First line has an integer, N, the number of levels in The Tree of Souls.Next line contains N integers with the ith integer being ai as described above.Next line contains N integers with the ith integer being pi as described above. Note that the probabilities given will be in percent.<h3>Output</h3>For each test case, output a line containing the required probability upto seven decimal places.<h3>Example: </h3><h3>Input: </h3>5<br>1 2 3 4 4<br>0 100 100 0 50<br><h3>Output: </h3>0.5000000<h3>Testcase</h3>2<br>5 5<br>50 60<br>",
		"answer" : "c2bcd58b78d58645f82b4ee1ce23efab",

		"tries" : 0,
		"answered" :false ,
		"correct" : false
	},
	{
		"title" : "4. The Thirsty dragon, Toruk",
		"question" : "Jake's new dragon, the badass dragon Toruk is always thirsty. So Jake always has to fill up water for it. Given two vessels, one of which can accommodate 'a' liters of water and the other which can accommodate 'b' liters of water, determine the number of steps required to obtain exactly 'c' liters of water in one of the vessels.At the beginning both vessels are empty. The following operations are counted as 'steps': -emptying a vessel, -filling a vessel, -pouring water from one vessel to the other, without spilling, until one of the vessels is either full or empty. <h3>Input</h3>First line containing a (the number of liters the first container can hold), second line containing b (the number of liters the second container can hold), and third line containing c (the final amount of liters of water one vessel should contain), not larger than 40000, given in separate lines.<h3>Output</h3>Output the minimum number of steps required to obtain c liters, or -1 if this is impossible. <h3>Example</h3><h3>Sample input: </h3> 5<br>2<br>3<br><h3>Sample output: </h3> 2<h3>Testcase</h3>7890<br>1234<br>56<br>",
		"answer" : "1177967c7957072da3dc1db4ceb30e7a",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "5. Make your own Avatar",
		"question" : "Being the lead geneticist of the Earth's expedition to Pandora, you need to sequence an Avatar's genes to match your human operative's. You've got two numbers denoting levels of various proteins in the two genes. As long as they are both larger than zero, they go through the same operation: subtract the lesser number from the larger one. If they are equal subtract one number from the another. For example, one operation transforms pair (4,17) to pair (4,13), it transforms (5,5) to (0,5).You've got some number of pairs (ai,bi). How many operations will need to be performed so that the genes are perfectly sequenced. (I.E. one of the numbers is >=0)<h3>Input</h3>The first line contains the number of pairs n(1<=n<=1000). Then follow n lines, each line contains a pair of positive integers ai,bi.<h3>Output</h3>Print the sought number of operations for each pair separated by a space.<h3>Examples</h3><h3>Input</h3> 2<br>4 17<br>7 987654321<br><h3>Output</h3> 8 141093479<h3>Testcase</h3>3<br>34 6537526<br>2 83737283<br>2434 98733<br>",
		"answer" : "360933471cc2799adf5dbed3644e2bcf",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "6. Na'avi Ability",
		"question" : "A Na'avi's ability to bond with the local flora and fauna measured according to the number of nerves in his braid.Let the number of nerves be the positive integer x. The ability is proportional to the number of positive integers d, such that d is the divisor of x, and x and d have at least one common (the same) digit in their decimal representations.Find Jake's ability to bond with Pandorian life, given the number of nerves in his braid.<h3>Input</h3>A single line contains a single integer x (1<=x<=10^9).<h3>Output</h3>In a single line print an integer - the answer to the problem.<h3>Examples</h3><h3>Input</h3> 1<h3>Output</h3> 1<h3>Input</h3> 10<h3>Output</h3> 2<h3>TestCase</h3>654885000",
		"answer" : "99bcfcd754a98ce89cb86f73acc04645",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	}
	],
	4 : [
	{
		"title" : "1. Running a business in new vulcan",
		"question" :"In the sad alternate reality, the planet Vulcan was destroyed by a Romulan named Nero in 2258. Over six billion Vulcans were killed, with an estimated 10,000 survivors. After witnessing the atrocity, Spock noted in his log that the Vulcan species had become endangered. Spock's prime reality counterpart founded a colony for the survivors, which by the following year had been settled and named New Vulcan. The currency of new vulcan is pretty awesome. There notes have values 1, C, C2, C3 ... . The sequence goes on till infinity, so notes have unbounded values. Spock runs a business organisation in the new vulcan. His organisation always keeps infinite number of notes of each value with it, but pays using minimum number of notes. For example, if C=5 and he has to pay 32 rupees, it will pay using one note of value 25, one note of value 5, and two notes of value 1. it cannot pay 32 rupees with fewer than four notes.Spock is wondering what is Kth smallest amount which, if paid using fewest possible notes, would require exactly S notes.<h3>Input</h3>One line, containing three space separated integers C, S and K.<h3>Output</h3>Separate line containing the required answer.<h3>Sample Input</h3>5 1 3<h3>Sample Output</h3>25<h3>Explanation</h3>All the amounts which require exactly 1 note are: 1, 5, 25, 125 ...<h3>Testcase</h3>167 235 23" ,
		"answer" : "090afe0d4abb5dfdccb84641fe115680",

		"tries" : 0,
		"answered" :false ,
		"correct" : false
	},
	{
		"title" : "2. The Not so Vulcan Doctor",
		"question" : "The official First Contact between Vulcans and Humans came on April 5, 2063, when a Vulcan survey ship, the T'Plana-Hath, detected the warp flight of Zefram Cochrane's Phoenix. The Vulcans met with Cochrane at his launch site on the day following the flight. (Star Trek: First Contact)settled and named New Vulcan.By the 21st and 22nd centuries, the Vulcans had also made contact with the Cardassians, Trill, Tholians, Klingons, and scores of other races. With interspecies relations and ties getting stronger, Vulcan became more and more inhabited with visitors from new planets and now Vulcan population comprised of a mix of species. After Cochrane made first contact with Vulcans, One of Cochrane's junior medical officer, Tajyk, left cochrane's army and opened a hospital in Vulcan.There are n aliens of different species in the queue to Dr. Tajyk. When an alien comes into the office, the doctor examines him, gives prescriptions, appoints tests and may appoint extra examination. Doc knows all the aliens perfectly well and therefore knows exactly that the alien number i in the queue will have to visit his office exactly ai times. We will assume that an examination takes much more time than making tests and other extra procedures, and therefore we will assume that once an alien leaves the room, it immediately gets to the end of the queue to the doctor. Of course, if the alien has visited the doctor as many times as necessary, then it doesn't have to stand at the end of the queue and it immediately goes home.Doctor plans to go home after receiving k aliens, and therefore what the queue will look like at that moment is important for him. Since the doctor works long hours and he can't get distracted like that after all, he asked you to figure it out.<h3>Input</h3>The first line of input data contains two space-separated integers n and k. In the second line are given space-separated integers a1, a2-an (1<=ai<=10^9).<h3>Output</h3>If the doctor will overall carry out less than k examinations, print a single number '-1' (without quotes). Otherwise, print the sequence of numbers - number of animals in the order in which they stand in the queue.Note that this sequence may be empty. This case is present in pretests. You can just print nothing or print one 'End of line'-character. Both will be accepted.<h3>Examples</h3><h3>Input</h3> 3 3<br>1 2 1<br><h3>Output</h3> 2 <h3>Note</h3>In the first sample test:Before examination:{1,2,3}After the first examination:{2,3}After the second examination:{3,2}After the third examination:{2}<h3>Testcase</h3> 20 430<br>25 27 25 24 24 49 11 30 24 50 48 40 41 5 19 45 16 43 43 12<br>",
		"answer" : "97e4751f73aad47dc4e4dd51313e473b",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "3. Through the darkness and beyond",
		"question" : "The crew of the Starship enterprise has been held captive by the Klingons on the prison planet Rura Penthe. Commander James T Kirk manages to pick the lock and the crew manages to escape aboard the Starship Enterprise, and start moving towards Yorktown at vp miles per hour. However, the Klingons discover him gone in t hours after his escape and quickly pick up their trail after and are hot on their heels, at a speed of vd miles per hour. Unfortunately for the crew, the Klingons had disabled their main thrusters and thus the Klingon ship is fast approaching. However, Dr. Spock had managed to steal their national artifacts, knowing the fact that the Klingons revere them more than anything else. Thus when the Klingon ship is about to overtake them he drops a couple of pieces of the royal jewelry out of the starship causing the Klingons to stop and take them up. The Klingon ship goes back to the prison planet to drop it off and only then do they resume the chase, losing out on f hours in the process.If Yorktown is c miles away, how many such artifacts does Dr. Spock need to reach the base safely? If the USS enterprise manages to reach Yorktown, the main base, at the same time as the Klingons they are safe as the Klingon ships are destroyed by the alliance forces and an extra artifact is not required in this case.<h3>Input</h3>The input data contains integers vp, vd,t,f and c, one per line.<h3>Output</h3>Output the minimal number of artifacts required for the escape to succeed.<h3>Examples</h3><h3>Input: </h3>1<br>2<br>1<br>1<br>10<br><h3>Output: </h3>2<h3>Input: </h3>1<br>2<br>1<br>1<br>8<br><h3>Output: </h3>1<h3>Note: </h3>In the first case one hour after the escape the Klingons will discover it, and the USS enterprise will be 1 mile away from Rura Penthe. In two hours the Klingons will overtake them 2 miles away from the prison, and they will need to drop the first artifact. To do so they return to Rura Penthe and continue the chase, wasting two more hours; meanwhile the USS enterprise will be 4 miles away from the prison. Next time the Klingons will overtake them 8 miles away from the prison, and Dr. Spock will need the second artifact, but after this they will reach Yorktown without any further trouble.The second case is similar to the first one, but the second time the dragon overtakes the princess when she has reached the castle, and she won't need the second bijou.<h3>Test Case: <h3>1<br>100<br>1<br>1<br>1000<br>",
		"answer" : "37a749d808e46495a8da1e5352d03cae",

		"tries" : 0,
		"answered" :false ,
		"correct" : false
	},
	{
		"title" : "4. Eliminate the affected",
		"question" : "Eminiar VII has been at war for over five hundred years with the planet Vendikar. Computers fight the war virtually so that the destruction of actual warfare does not devastate the two worlds, thus preserving both civilizations. Whenever the computer registers a hit, the affected citizens are reported to a disintegration chamber and are vaporized. If we number all affected citizens with positive integers from 1 to n, then we can formalize a model of vaporization (a,b): first the computer vaporizes a citizen numbered a, then number a+b, then-number a+2*b, and so on, until the number of citizens exceeds n. During one vaporization process, the citizens are not renumbered.The problem here is that more severely affected citizens need to be vaporized first. And the severity of disease in each person depends on his/her weight.It would be great if all of them were to be vaporized in the same go, but the computer cannot handle that much load. So, the computer knowing the severity of each of disease, makes p scenarios of the (a, b)-vaporization. Now the computer wants to identify the following things for each scenario individually: what is total weight that will go into the vaporizer at a time. All the scenarios are independent, in the process of performing the calculations no more citizens are being affected.<h3>Input</h3>The first line contains the only positive integer n(1<=n<=3*10^5)-the number of affected citizens.The second number contains n positive integer wi, separated by spaces, where the i-th number describes the weight of the i-th citizen.The third line contains the only positive integer p - the number of scenarios of (a,b)-vaporization (1<=p<=3*10^5).Each following line contains integer parameters a and b of the corresponding scenario (1<=a,b<=n).<h3>Output</h3>Print for each scenario of the (a,b)-vaporization the total weight of the citizens, that can be put into the vaporization chamber using only this scenario. (Print in a single line separated by a space)<h3>Examples</h3><h3>Input</h3> 3<br>1 2 3<br>2<br>1 1<br>1 2<br><h3>Output</h3> 6 4<h3>Input</h3> 4<br>2 3 5 7<br>3<br>1 3<br>2 3<br>2 2<br><h3>Output</h3> 9 3 10<h3>Testcase<h3>5<br>3 2 4 5 6<br>8<br>4 2<br>3 1<br>3 5<br>3 4<br>3 5<br>5 5<br>4 4<br>5 3<br>",
		"answer" : "4eedacccc867232297aa436e5f8c1817",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "5. Our Base is Under Attack",
		"question" : "Vorik needs to upgrade the transporter of USS Voyager. Only way to do that is to find an optimum base for the number system. So he dove into his books to learn everything about bases.Vorik learned that for bases greater than ten, new digit symbols need to be introduced, and that the convention is to use the first few letters of the English alphabet. For example, in base 16, the digits are 0123456789ABCDEF. Vorik thought that this is unsustainable. The English alphabet only has 26 letters, so this scheme can only work up to base 36. But this is no problem for Vorik, because Vorik is very creative and can just invent new digit symbols when he needs them. (Vorik is very creative)Vorik also noticed that in base two, all positive integers start with the digit 1. However, this is the only base where this is true. So naturally, Chef wonders: Given some integer N, how many bases b are there such that the base-b representation of N starts with a 1?<h3>Input</h3>:Line containing a single integer N (in base ten).<h3>Output: </h3>A single line containing the number of bases b, or INFINITY if there are an infinite number of them.<h3>Example</h3><h3>Input:</h3>6<h3>Output:</h3>4<h3>Explanation</h3>In the first test case, 6 has a leading digit 1 in bases 2, 4, 5 and 6: 610=1102=124=115=106. <h3>Test Case</h3>7897650",
		"answer" : "3f1268ef38224ae573d57f8b2f554f39",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "6. For honour",
		"question" : "Spock's father Sarek is the ambassador to the United Federation of Planets. As the ambassador to Earth, he met and married a human going against the Vulcan tradition of marrying within the species. Spock thus being half human, half Vulcan and is the butt of many a joke by the bullies in his school. Unable to contain his frustration he challenges them to get a higher score than him in the exam. Until the last question of the exam he and his rival are able to complete all questions. However, now both of them are stuck at the following question. Please help Spock solve the question and prove to everyone once and for all that though half Vulcan his mental prowess is no less than theirs, if not greater.A number is called a square free number if there does not exist a number greater than 1, whose square divides the number evenly/perfectly. For example, number 8 is not a square free number as number 4 (which is square of 2), divides 8. Similarly, number 4 is also not a square free number. However numbers 1, 3, 6 all are square free numbers. A number n is called a good number if following properties hold. -It is a square free number. -Let s denote the sum of all divisors of n (including non-trivial divisors like 1 and itself). Let c denote the number of prime numbers dividing s. Number c should be a prime number. You will input two numbers L, R, you have to find sum of divisors (including non-trivial) of all the good numbers in the range L to R, both inclusive. Please note that 0 is not considered a prime number.<h3>Input</h3>Single line containing two space separated integers L, R denoting the range for which you have to find sum of divisors of good numbers.<h3>Output</h3>For each test case, output a single line corresponding to answer of the test case.<h3>Example</h3><h3>Input</h3>1 5<h3>Output: </h3>6<h3>Explanation</h3>Following number in the range 1 to 10 are square free numbers: 1, 2, 3, 5, 6, 7, 10.<h3>Test Case: </h3>567 923",
		"answer" : "1c09aeb12be4ea2bfe8d2cad5a6dd05f",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	},
	{
		"title" : "7. Sinking Enterprise",
		"question" : "The Enterprise crashed into a reef and is sinking. Now the entire crew must be evacuated. All n crew members have already lined up in a row (for convenience let's label them all from left to right with positive integers from 1 to n) and await further instructions. However, one should evacuate the crew properly, in a strict order. Specifically:The first crew members to leave the Enterprise are rats. Then women and children (both groups have the same priority) leave the Enterprise. After that all men are evacuated from the Enterprise. The captain leaves the sinking Enterprise last.If we cannot determine exactly who should leave the Enterprise first for any two members of the crew by the rules from the previous paragraph, then the one who stands to the left in the line leaves the Enterprise first (or in other words, the one whose number in the line is less).For each crew member we know his status as a crew member, and also his name. All crew members have different names. Determine the order in which to evacuate the crew.<h3>Input</h3>The first line contains an integer n, which is the number of people in the crew (1<=n<=100). Then follow n lines. The i-th of those lines contains two words - the name of the crew member who is i-th in line, and his status on the Enterprise. The words are separated by exactly one space. There are no other spaces in the line. The names consist of Latin letters, the first letter is uppercase, the rest are lowercase. The length of any name is from 1 to 10 characters. The status can have the following values: rat for a rat, woman for a woman, child for a child, man for a man, captain for the captain. The crew contains exactly one captain.<h3>Output</h3>Print n terms in a single line separated by a space. The i-th of them should contain the name of the crew member who must be the i-th one to leave the Enterprise.<h3>Examples</h3><h3>Input</h3> 6<br>Jack captain<br>Alice woman<br>Charlie man<br>Teddy rat<br>Bob child<br>Julia woman<br><h3>Output</h3> Teddy Alice Bob Julia Charlie Jack<h3>Testcase</h3>11<br>Jue rat<br>Wyglbyphk rat<br>Gjlgu child<br>Gi man<br>Attx rat<br>Theorpkgx man<br>Ym rat<br>X child<br>B captain<br>Enualf rat<br>Kktsgyuyv woman<br>",
		"answer" : "fdeaee07a3653731f41453a080e811ab",

		"tries" : 0,
		"answered" : false,
		"correct" : false
	}	
	]

};

var path = require ('path');
var score = 0;
var writeScore;
var dataStore = require('nedb');
var tries = [];
var titles = [];
var answers = [];
try
{
	var db = new dataStore({
		filename: path.join(require('nw.gui').App.dataPath,'FinalFrontier-Round11.db'),
		autoload: true
	});
}
catch(err)
{
	console.log(err);
}

$(document).ready(function() {
	splashScreen();
	onRestartApp();       
    //FOR FINAL FRONTIER
    $(document).on("click",".level",function(ev){
    	ev.preventDefault();

    	var clickedLevel = parseInt($(this).data("level"));
    	$(".splash-level-no").html("LEVEL " + clickedLevel);
    	$(".splash-level-name").html($(this).data("name"));
    	if(levels[clickedLevel].unlock) {
    		currentUser.currentLevel = parseInt($(this).data("level"));
    		$(".toSolve").html(levels[clickedLevel].total);
    		hideLevelContainer(function(){
    			showLevelSplashScreen(function(){
    				$(".splash-screen").fadeOut();
    				populateQuestionsForLevel();
    				showQuestionArea();
    			});
    		});
    	}
    	else
    		toastr.info("Please unlock the level first to answer the questions.");

    });	

    $(document).on("click",".goToMenu",function(){
    	showLevelScreen();
    });

    function showLevelScreen()
    {
    	$(".kaiser-container").hide();
    	$(".level-screen").fadeIn(800);
    	updateUnlockedLevels();

    }

    function updateUnlockedLevels()
    {
    	var totalScore = 0;
    	for(var j = 1;j <= 4;j++)
    	{
    		totalScore += currentUser['level' + j];
    		$("#level" + j).find(".solved_number").html((currentUser['level' + j])/25);
    		var isUnlocked = levels[j].unlock;
    		if(isUnlocked)
    		{
    			$("#level" + j).find('.lock-image-holder').hide();
    			$("#level" + j).find('.level-info').show();
    		}

    	}

    	$(".total-score").html(totalScore);
    }

    function populateQuestionsForLevel()
    {
    	var currentLevel = currentUser.currentLevel;
    	$(".level-indicator").html("LEVEL " + currentLevel);
    	var q = questions[currentLevel];
    	var questionCount = questions[currentLevel].length;
    	$(".side-panel").empty();
    	var noOfCorrect = 0;
    	for(var i = 0;i < questionCount;i++)
    	{
    		var j = i + 1;
    		var className = "";
    		if(q[i].answered)
    		{
    			if(q[i].correct)
    			{
    				noOfCorrect++;
    				className = "correct"
    			}
    			else
    				className = "incorrect";
    		}
    		$(".side-panel").append('<div class="question-tab ' + className + '" id="' + i + '">' + j + '</div>');
    		
    	}
    	$(".score").html("Your Score " + (noOfCorrect * 25));
    	$(".number").html(noOfCorrect);
    }


    function hideLevelContainer(callback)
    {
    	$(".level-screen").fadeOut(800,function(){
    		return callback();
    	});
    }
    function showLevelSplashScreen(callback)
    {
    	$(".splash-screen-center").show();
    	$('.splash-screen').fadeIn(1000, function () {
    		callback();
    	});
    }
    function showQuestionArea()
    {
    	$(".kaiser-container").fadeIn();
    }

    function checkIfLevelUnlocked(level)
    {
    	//levels[level].total is the number of questions required to unlock the next level
    	if(currentUser['level' + level] == levels[level].total * 25) {
    		$("#level" + level).css('pointer-events','none');
    		var nextLevel = level + 1;
    		levels[level].unlock = false;
    		levels[nextLevel].unlock = true;
    		fs.writeFileSync(path.join(require('nw.gui').App.dataPath,'FinalFrontier-Round11.db'),'');
    		db.insert({currentUser : currentUser,levels : levels,questions : questions},function(err,newDocs){    		
    			toastr.info("You've unlocked Level " + nextLevel);
    			showLevelScreen();
    		});
    	}
    	// return;
    }


    //ENDS HERE    
     //SHOW QUESTION ON CLICK
     $(document).on("click",".question-tab",function() {
     	var currentLevel = currentUser.currentLevel;

     	var current_question = Number($(this).text());
     	currentLevel = questions[currentLevel];

     	$('.title').html(currentLevel[current_question - 1].title);
     	$('.question_no').html(current_question);
     	$('.question').html((currentLevel[current_question - 1].question).toString());
     	$('.remaining-tries').html('Remaining tries : ' + (5 - currentLevel[current_question - 1].tries));
     });



     $('.check').click(function() {
     	fs.writeFileSync(path.join(require('nw.gui').App.dataPath,'FinalFrontier-Round11.db'),'');
     	var answer = $.md5($('.answer-entered').val());
     	var current_question = Number($('.question_no').text());
     	var currentLevel = questions[currentUser.currentLevel];
     	if(currentLevel[current_question - 1].tries == 5)
     	{
     		toastr.error("5 tries are up.");
     		return false;
     	}
     	if(currentLevel[current_question - 1].answered && currentLevel[current_question - 1].correct)
     		return false;

     	currentLevel[current_question - 1].answered = true;

     	currentLevel[current_question - 1].tries += 1; 
        	// doc.tries = tries[current_question-1];
        	$('.remaining-tries').html('Remaining tries : ' + (5 - currentLevel[current_question - 1].tries));

        	var isCorrect = 0;

        	if (currentLevel[current_question - 1].tries < 5)
        	{



        		if (answer == currentLevel[current_question - 1].answer)
        		{

        			isCorrect = 1;
        			// doc.correct = 1;
        			currentLevel[current_question - 1].correct = true;
        			//DB PART
        			

        			
        			var currentLevel = currentUser.currentLevel;

        			currentUser['level' + currentLevel] += 25;        				

        			score += 25;

        			

        				// doc.score = score;



        			//GREEN TICK
        			$(".kaiser-container").fadeTo(500, 0.3, function() {
        				$('.score').html('Your score : ' + currentUser['level' + currentUser.currentLevel]);
        				
        				// currentUser['level' + currentLevel] = score;
        				
        				$('.svg-container').fadeIn();
        				$(".trigger").addClass("drawn");
        				$('.svg-container').delay('slow').fadeOut('slow', function() {
        					$(".kaiser-container").css('opacity', 1);
        					//HERE GETTING ID. SUBTRACTING BY 1
        					$('#' + (current_question - 1)).css('background-color', '#1b5e20');
        					$(".trigger").removeClass("drawn");
        					var currentLevelScore = currentUser['level' + currentUser.currentLevel];
        					var questionsAnswered = currentLevelScore / 25;
        					$(".number").html(questionsAnswered);
        					db.insert({currentUser : currentUser,levels : levels,questions : questions},function(err,newDocs){
        						checkIfLevelUnlocked(currentUser.currentLevel);
        					});
        				});
        			});

        			
        			// doc.tries = tries[current_question-1];


        		}


        		else
        		{

        			
        			// doc.correct = 0;
        			// doc.score = score;
        			$(".kaiser-container").fadeTo(500, 0.3, function() {

        				$('.score').html('Current Level score : ' + score);
        				$('.svg-container1').fadeIn();
        				$(".trigger1").addClass("drawn1");
        				$('.svg-container1').delay('slow').fadeOut('slow', function() {
        					$(".kaiser-container").css('opacity', 1);
        					db.insert({currentUser : currentUser,levels : levels,questions : questions},function(err,newDocs){
        					});
        					//GETTING ID. SUBTRACTING 1
        					$('#' + (current_question - 1)).css('background-color', '#b71c1c');
        					$(".trigger1").removeClass("drawn");
        				});
        			});

        			
        		}

        		

        		
        	}
        	else
        	{
        		toastr.info('5 tries are up');
        		$('#' + (current_question - 1)).css('pointer-events','none');
        	}

        });
     function onRestartApp()
     {

     	db.find({}, function (err, docs) {
     		if(docs.length) {

     			currentUser = docs[0].currentUser;

     			levels = docs[0].levels;
     			questions = docs[0].questions;
     			showLevelScreen();

     		}
     		else {
     			db.insert({currentUser : currentUser,levels : levels,questions : questions},function(err,newDocs){
     				
     			});
     		}
     	});

	// $('.title').html(titles[0]);
	// $('.question_no').html(1);
	// $('.question').html(questions[0]);

}

// function subjectiveQuestion(){
//     for(var i=21;i<=25;i++)
//     {
//         $('#'+i).click(function() {
//             $('.submission').css('display','none');
//         });
//     }
// }

function splashScreen()
{

	$('.splash-screen').fadeOut(3000, function () {
		$(".logo").hide();
		$(".level-screen").fadeIn();
	});
}

});

