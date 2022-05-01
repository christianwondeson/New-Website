const body = document.body;
const nav_div = document.createElement("div");
body.append(nav_div);
nav_div.className = "navbar";

const headDiv = document.createElement("div");
nav_div.append(headDiv);
headDiv.className = "container";
//title link
var hyperText = document.createElement("a");
headDiv.append(hyperText);
hyperText.setAttribute('href', '#');
hyperText.setAttribute('class','logo');
hyperText.innerText = "Remember";

const headSpan = document.createElement("span");
hyperText.append(headSpan);
headSpan.innerHTML = "That";
//menu image part
const toggleBtn =document.createElement("img");
headDiv.append(toggleBtn);
toggleBtn.setAttribute('src','image/menu.svg');
toggleBtn.setAttribute('alt', 'menu_bar_icon');
toggleBtn.setAttribute('class', 'mobile-menu');
toggleBtn.setAttribute('id','mobile-cta');

const navItem_1 = document.createElement("nav");
headDiv.append(navItem_1);
navItem_1.setAttribute('class', 'nav-links');
//eixt image part
const exitImg = document.createElement("img");
navItem_1.append(exitImg);
exitImg.setAttribute('src','image/exit.svg');
exitImg.setAttribute('alt', 'exit_icon');
exitImg.setAttribute('class', 'mobile-exit');
exitImg.setAttribute('id','mobile-cta_exit');
exitImg.style.background = "black";

//links and list part
const UnListsOne = document.createElement("ul");
navItem_1.append(UnListsOne);
UnListsOne.setAttribute('class', 'navlink');


const value = ["home", "features", "pricing"];
console.log(value.length);
for(let i = 0; i < value.length; i++){
    const listsOne = [];
    listsOne[i] = document.createElement("li");
    UnListsOne.append(listsOne[i]);
    const link = [];
    link[i] = document.createElement("a");
    link[i].setAttribute('href', '#'); 
    listsOne[i].append(link[i]);
    link[i].innerHTML = value[i];

}


const UnListstwo = document.createElement("ul");
navItem_1.append(UnListstwo);
UnListstwo.setAttribute('class', 'links');
const valueAction = ["contact", "go premium"];
for(let j = 0; j < valueAction.length; j++)
{
    const listsTwo = [];
    listsTwo[j] = document.createElement("li");
    UnListstwo.append(listsTwo[j]);
    const linkAct = [];
    linkAct[j] = document.createElement("a");
    linkAct[j].setAttribute('href', '#');
    listsTwo[j].append(linkAct[j]);
    linkAct[j].innerText = valueAction[j];

}

//section part
const sectionHero = document.createElement("section");
body.append(sectionHero);
sectionHero.className = "hero";

const SecDivContain = document.createElement("div");
SecDivContain.className = "container";
sectionHero.append(SecDivContain);
/////////////////////////section hero
const leftCol = document.createElement("div");
leftCol.className = "left-col";
SecDivContain.append(leftCol);

const para = document.createElement("p");
leftCol.append(para);
para.className = "subhead";
para.innerHTML = "it's nitty & gritty";

const header = document.createElement("h1");
leftCol.append(header);
header.innerHTML = "a task app that doesn't stink";
//////////////////
const heroLink = document.createElement("div");
heroLink.className = "hero-cta";
leftCol.append(heroLink);

const secL_1 = document.createElement("a");
secL_1.setAttribute('href', '#');
secL_1.setAttribute('class','primary-cta');
secL_1.innerHTML = "try for free";
heroLink.append(secL_1);

const secL_2 = document.createElement("a");
secL_2.setAttribute('href', 'youtube.com');
secL_2.setAttribute('target','_blank')
secL_2.setAttribute('class', 'watchVid')
secL_2.innerHTML = "watch the video";
heroLink.append(secL_2);

const secImg = document.createElement("img");
secImg.setAttribute('src', 'image/watch.svg');
secImg.setAttribute('alt', 'watch a video');
secL_2.append(secImg);

const imageSec = document.createElement("img");
imageSec.setAttribute('src', 'image/illustration.svg');
imageSec.setAttribute('class', 'hero-img');
imageSec.setAttribute('alt', 'illustrate our image');
SecDivContain.append(imageSec);
////////////////////section 2

const section_2 = document.createElement("section");
section_2.className = "feature-sec";
body.append(section_2);

const SecTwoDiv = document.createElement("div");
SecTwoDiv.className = "contain";
section_2.append(SecTwoDiv);

const UnLists_3 = document.createElement("ul");
SecTwoDiv.append(UnLists_3);
UnLists_3.setAttribute('class','feature_ul');
const secValue = ["unlimited tasks", "sms task reminders", "confetti explosions upon task completions", "social media announcements", "real time collaboration", "other awesome features"];

for(let i= 0; i < secValue.length; i++)
{
    const lists_3 = [];
    lists_3[i] = document.createElement("li");
    UnLists_3.append(lists_3[i]);
    lists_3[i].setAttribute('class', 'ft_list')
    lists_3[i].innerHTML = secValue[i];
}

const secImg_1 = document.createElement("img");
SecTwoDiv.append(secImg_1);
secImg_1.setAttribute('class', 'ftS-img');
secImg_1.setAttribute('src', 'image/holding-phone.jpg');
secImg_1.setAttribute('alt', 'phone_pic');
/////////////////section 3
const section_3 = document.createElement("section");
section_3.className = "testimonial-sec";
body.append(section_3);

const Sec_3_Div = document.createElement("div");
Sec_3_Div.className = "contains";
section_3.append(Sec_3_Div);

const UnLists_4 = document.createElement("ul");
Sec_3_Div.append(UnLists_4);


for(let i = 0; i < 3; i++)
{
    const lists_4 = [];
    lists_4[i] = document.createElement("li");
    UnLists_4.append(lists_4[i]);
    for(let j = 0; j < 3; j++)
    {
        const img_person_1 = document.createElement("img");
        lists_4[i].append(img_person_1);
        img_person_1.setAttribute('src', "image/person.jpg");
        img_person_1.setAttribute('alt', 'persons image');
        const cite_person_1 = document.createElement("cite");
        lists_4[i].append(cite_person_1);
        cite_person_1.innerHTML = "jane Doe";
        const quote_person_1 = document.createElement("blockquote");
        lists_4[i].append(quote_person_1);
        quote_person_1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum voluptatem! Placeat, saepe tempora facere sint laudantium officiis eius nobis assumenda atque laboriosam rerum quibusdam sed. Temporibus est unde officia?";
        break;
    }
}
///////////////////// section final

const secContact = document.createElement("section");
body.append(secContact);
secContact.className = "contact-sec";

const contactDiv = document.createElement("div");
contactDiv.className = "containers";
secContact.append(contactDiv);

const divLeft = document.createElement("div");
divLeft.className = "contact-left";
contactDiv.append(divLeft);

const headerContact = document.createElement("h2");
divLeft.append(headerContact);
headerContact.innerText = "contact";

const contactForm = document.createElement("form");
divLeft.append(contactForm);
contactForm.setAttribute('action', ' ');

const labelContact = document.createElement("label");
contactForm.append(labelContact);
labelContact.setAttribute('for','name');
labelContact.textContent = "Name";

const textContact = document.createElement("input");
contactForm.append(textContact);
textContact.setAttribute('type','text');
textContact.setAttribute('id','name');
textContact.setAttribute('name','name');

const labelContactEmail = document.createElement("label");
contactForm.append(labelContactEmail);
labelContactEmail.setAttribute('for','email');
labelContactEmail.textContent = "Email";

const emailContact = document.createElement("input");
contactForm.append(emailContact);
emailContact.setAttribute('type','email');
emailContact.setAttribute('id','email');
emailContact.setAttribute('name','email');

const labelContactTarea = document.createElement("label");
contactForm.append(labelContactTarea);
labelContactTarea.setAttribute('for','message');
labelContactTarea.textContent = "Message";

const textArea = document.createElement("textarea");
contactForm.append(textArea);
textArea.setAttribute('name','message');
textArea.setAttribute('id','message');
textArea.setAttribute('col','30');
textArea.setAttribute('rows','10');

const btnSend = document.createElement("input");
contactForm.append(btnSend);
btnSend.setAttribute('class','send-message');
btnSend.setAttribute('value','send message');
btnSend.setAttribute('type', 'submit');
////////////////////// map div 

const divRight = document.createElement("div");
contactDiv.append(divRight);
divRight.className = "contact-right";

const framesRht = document.createElement("iframe");
divRight.append(framesRht);
framesRht.setAttribute('src','');
framesRht.setAttribute('width','600')
framesRht.setAttribute('height', '450');
framesRht.setAttribute('style', 'border:0;')
framesRht.setAttribute("allowfullscreen", '')
framesRht.setAttribute("referrerpolicy", 'no-referrer-when-downgrade')
framesRht.setAttribute('loading', 'lazy');

framesRht.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4813389039405!2d38.76556521407075!3d9.01977919161855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858e670a1e89%3A0x43bafe2388215ae!2sKasanchis%20Menahariya!5e0!3m2!1sen!2set!4v1651052639161!5m2!1sen!2set";