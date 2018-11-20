var diaryEntries = [];

class DiaryEntry {
  constructor(date, diaryEntry) {
    // this.pk = {};
    // this.pk.N = new Date(date).valueOf().toString();
    this.Date = {}; 
    this.Date.S = new Date(date).toDateString();
    this.diaryEntry = {};
    this.diaryEntry.S = diaryEntry;
  }
}

{
  
diaryEntries.push(new DiaryEntry('September 4, 2018', "It’s the day after Labor Day. I was supposed to go to work, but I called out because I think I might have pink eye? It’s hard to tell though because my eye hurts. Anyway, I feel like a leper so I’m staying home just in case.")); 
diaryEntries.push(new DiaryEntry('September 5, 2018', "A quick visit to my doctor confirms that it is not pink eye! I met up with an ophthalmologist and she told me that I have sustained an “eye trauma”. I laughed to myself considering my line of business as I essentially make a living off of other people’s trauma. This probably isn’t funny unless you’ve worked in social services for a while. Anyway, the Dr. prescribed some rather expensive eye drops and I was cleared to go back to work. I definitely still look like I have pink eye."));
diaryEntries.push(new DiaryEntry('September 7, 2018', "I attended the Care Coordination dept. staff meeting this morning from 9am to 10am, and then walked over to the health clinic for a Health Homes team meeting. Health Homes is a grant from the state to provide patient navigation services to patients who have Medicaid and at least 2 chronic illnesses. To be honest, I really hate this grant. The work it funds is really important, but policies and procedures are completely unorganized and the people running it don’t seem to know what they’re doing. It’s fun! Later today I facilitated a group supervision session with the case managers I stepped in to supervise since we are short staffed. I listened to them complain for an hour about things I can’t fix. I’m sleepy and ready to go home."));
diaryEntries.push(new DiaryEntry('September 10, 2018', "Today I was in a meeting with a representative from Gov. Cuomo’s office with some other staff members to talk about the work we do and why it’s so important for the state to continue funding us. It was pretty annoying though. They scheduled and cancelled on us 3 times, and when he actually showed up, he left us all in there for 25 minutes while he was on an “important call”. The things we do for money…"));
diaryEntries.push(new DiaryEntry('September 11, 2018', "Today I met with some staff in the mental health department to discuss expanding the Surgery Preparation Clinic for transgender patients. It was a productive meeting and we have a lot planned for it including research on the efficacy of our intervention and potentially opening up on Saturdays to maximize access for patients.  I also trained a new case manager for our site in the Bronx because so many patients need help."));
diaryEntries.push(new DiaryEntry('September 13, 2018', "Today was our first “Big Bang” meeting to improve health access for our transgender patients. This population in our clinic has outgrown our HIV positive population and it’s growing quickly! Our job in this committee is to spot problem areas in our clinic for staff and patients and propose new workflows to make things easier to navigate. We started off the meeting with a rather lengthy icebreaker, but luckily we started the process mapping exercise to get a bigger picture of the issues we face getting patients ready for surgery."));
diaryEntries.push(new DiaryEntry('September 18, 2018', "Today I met with my ‘mentor’ to discuss my new role at the clinic. I was asked to write my own job description based on my presentation of problem areas in transgender health access, but it was only semi-approved by my Executive Director, because they want to haggle about the title and salary. It will take a couple months to transition into this new job but I’m excited to move into a project management role, and away from having to manage the daily crisis cycle that is our clinic. Hello burnout! I have to work late tonight to host a video screening for the new episodes of “Transmasculine & Healthy”, a video docuseries about the sexual health of transmen. I hope people show up!"));
diaryEntries.push(new DiaryEntry('September 24, 2018', "The meeting with the ED went well! I negotiated for a 15% salary increase and FINALLY signed the paperwork. Unfortunately everything is moving super fast. I literally only have a week left before I start my new job, so I have a couple days to tell my supervisees that they’re getting new supervisors and then I have to pack my desk. Yikes!"));
diaryEntries.push(new DiaryEntry('September 27, 2018', "So I pretty much walked into a shit storm today. Got called into an emergency meeting because one of our patients threatened to murder one of the surgeon’s staff members at Mt. Sinai because she “wasn’t being seen fast enough”. She was discharged from their practice 2 weeks after receiving a vaginoplasty and needed to be linked to a provider who can provide after care for her because she was turned away from other providers. Luckily I work with a great team of pcps who were able to step in to offer medical care, but patient outbursts like this are happening more and more. Perhaps now the eye trauma joke contains a little more context? Insert full-teethed grimace emoji. I have to stay late for our fundraiser where I will happily drink some complimentary booze after this wild day."));
diaryEntries.push(new DiaryEntry('October 2, 2018', "Today I’m beginning to wind down the meetings with my mentor. He congratulated me on the promotion and encouraged me to keep up the good work so-to-speak. I thanked him for the support in return. It was a really nice moment and it definitely felt good to be acknowledged. So he goes on to update me on everything that’s been going on in the clinic and naturally, there is a new PR problem that I have to deal with. 1) There is another estrogen shortage and the funding source for those low-cost medications only cover a specific manufacturer. 2) The only other manufacturer of estrogen just jacked up the price by 3324.48%!! I’m not even kidding! 3) This means that the health center can’t afford to provide low cost estrogen anymore and our patients are mostly low-income. 4) There will be community backlash against the clinic for sure, so I have been tasked with figuring out how to message this to our patients. Awesome."));
diaryEntries.push(new DiaryEntry('October 5, 2018', "This morning I conducted my second training for our mental health providers on trans health policy, insurance discrimination, patient surgery prep, doing proper surgery readiness assessments, common patient issues, and writing WPATH compliant letters. It’s really hard to keep everyone on the same page so I hope this training is helpful. Fingers crossed."));
diaryEntries.push(new DiaryEntry('October 8, 2018', "It’s definitely a Monday. There is a patient here who refuses to leave the building until he gets a letter from a psychiatrist and I’ve been called in to talk to him because he wanted to “speak to a supervisor”. After dropping everything I was doing to check in with him, it becomes evident that he created the problem for himself and decided to put it on us to fix for him.  He was rude and aggressive the whole time. I honestly can’t wait to stop seeing patients. This dude really put me over the edge today and it’s not even 11am yet! Never trust anyone who wants to speak to a supervisor."));
diaryEntries.push(new DiaryEntry('October 9, 2018', "I finally found some time to pack my desk. Deuces!"));
diaryEntries.push(new DiaryEntry('October 11, 2018', "I just found out that a patient I’ve been working with for a long time is at risk of being discharged from our mental health department for disruptive behavior. She’s normally really sweet so I was kind of shocked to hear this. It’s sad because she honestly needs the therapy so I’m hoping to find some alternative resources for her.  In other news, the case managers I’m temporarily supervising have been calling out a lot lately and its really annoying to keep changing the schedule constantly. I wonder if they will ever hire someone for the position I’m covering for? I’m a little tired of doing 3 full time jobs…"));

}
console.log(diaryEntries);

//Keep your API keys off of GitHub (use a Linux environment variable instead) enter in console, not in js file
// printenv | grep AWS_ID
// printenv | grep AWS_KEY

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
params.Item = diaryEntries[5]; 
params.TableName = "momentsinwork2";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

