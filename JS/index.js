let navbar=document.getElementById("navbar");
    let name_div=document.createElement("div");
    name_div.setAttribute("id", "name");
    let para1=document.createElement("p");
    para1.innerText="M.";
    name_div.append(para1);

    let rest=document.createElement("div");
    rest.setAttribute("id", "rest");

    let about_div=document.createElement("div");
    about_div.setAttribute("id", "about");
    let about_anchor=document.createElement("a");
    about_anchor.href="#aboutme";
    let para2 = document.createElement("p");
    para2.innerText="About";
    about_anchor.append(para2);
    about_div.append(about_anchor);

    let project_div=document.createElement("div");
    project_div.setAttribute("id", "project");
    let project_anchor = document.createElement("a");
    project_anchor.href="#projects";
    let para3 = document.createElement("p");
    para3.innerText="Projects";
    project_anchor.append(para3);
    project_div.append(project_anchor);


    let skills_div=document.createElement("div");
    skills_div.setAttribute("id", "tech");
    let skills_anchor=document.createElement("a");
    skills_anchor.href="#skills";
    let para4 = document.createElement("p");
    para4.innerText="Skills";
    skills_anchor.append(para4);
    skills_div.append(skills_anchor);


    let contact_div=document.createElement("div");
    contact_div.setAttribute("id", "details");
    let contact_anchor=document.createElement("a");
    contact_anchor.href="#contact";
    let para5=document.createElement("p");
    para5.innerText="Contact Me";
    contact_anchor.append(para5);
    contact_div.append(contact_anchor)

    rest.append(about_div, project_div, skills_div, contact_div);

    navbar.append(name_div, rest);


    let photo_div=document.createElement("div");
    photo_div.setAttribute("id", "photo_div");
    
    let image=document.createElement("img");
    image.src="/Images/Mehul.jpg";

    photo_div.append(image);

    let name_details_div=document.createElement("div");
    name_details_div.setAttribute("id", "name_details_div");
    let name_heading=document.createElement("h1");
    name_heading.innerText="Hi, I am";
    name_heading.setAttribute("id", "name_heading")
    let name_span=document.createElement("span");
    name_span.innerText=" Mehul.";
    name_span.setAttribute("id", "name_span");
    name_heading.append(name_span);
    let about=document.createElement("p");
    about.setAttribute("class", "about");
    about.innerText="A Backend Developer with a deep knowledge of Java, Javascript, Data Structures & Algorithms and 1000 plus hours of coding. Team player looking to work in a challenging environment where I can implement and enhance my skills in order have deeper understanding of Web Development and along the way achieve set goals.";
    let resume_button=document.createElement("button");
    resume_button.setAttribute("id", "resume_button");

    let resume_anchor=document.createElement("a");
    resume_anchor.href="https://drive.google.com/uc?export=download&id=1tKu_2uGUHAtAwAf9LoAjRKl5HG--N5nQ";
    resume_anchor.innerText="Resume";
    resume_anchor.setAttribute("target", "_blank");
    resume_button.append(resume_anchor);
    let profession_heading=document.createElement("h1");
    profession_heading.innerText="A Back End Engineer."

    name_details_div.append(name_heading, profession_heading, about, resume_button);
    document.getElementById("aboutme").append(photo_div, name_details_div);

    // PROJECTS

    let projects_mainheading=document.createElement("h1");
    projects_mainheading.innerText="PROJECTS";

    let container=document.createElement("div");
    container.setAttribute("id", "project_container");

    let card1 = document.createElement("div");
    card1.setAttribute("class", "cards");

    let pic_div1=document.createElement("div");
    pic_div1.setAttribute("class", "pic_div");

    let project_image1=document.createElement("img");
    project_image1.src="/Images/HeadPhoneZone(Hero Image).png";

    pic_div1.append(project_image1);

    let project_details1=document.createElement("div");
    project_details1.setAttribute("class", "project_details");
    let project_heading1=document.createElement("h2");
    project_heading1.innerText="Headphone Zone Clone";
    let project1_para=document.createElement("p");
    project1_para.innerText="It is India’s first online store for headphones, earphones and Audio devices. This was my first collaborative project. I created Login, Signup and Cart Functionality.";

    let tech_div=document.createElement("div");
    tech_div.setAttribute("class", "tech_div");   // Common for every card

    let tech_button1=document.createElement("button");
    tech_button1.innerText="HTML";

    let tech_button2=document.createElement("button");
    tech_button2.innerText="CSS";

    let tech_button3=document.createElement("button");
    tech_button3.innerText="Javascript";

    tech_div.append(tech_button1, tech_button2, tech_button3);
    tech_div.setAttribute("class", "tech_div");

    let link_div1=document.createElement("div");
    link_div1.setAttribute("class", "link_div");

    let github_button1=document.createElement("button");
    
    let github_anchor1=document.createElement("a");
    github_anchor1.href="https://github.com/Mehul1699/headphonezone.in.git";
    github_anchor1.innerText="GitHub";
    github_anchor1.setAttribute("target", "_blank");

    github_button1.append(github_anchor1);

    let deployed_button1=document.createElement("button");

    let deployed_link1=document.createElement("a");
    deployed_link1.href="https://headphonezone-unit3project.netlify.app/";
    deployed_link1.setAttribute("target", "_blank");
    deployed_link1.innerText="Live";

    deployed_button1.append(deployed_link1);

    link_div1.append(github_button1, deployed_button1);

    project_details1.append(project_heading1, project1_para, tech_div, link_div1);

    card1.append(pic_div1, project_details1);

    // MEESHO

    let card2 = document.createElement("div");
    card2.setAttribute("class", "cards");

    let pic_div2=document.createElement("div");
    pic_div2.setAttribute("class", "pic_div");

    let project_image2=document.createElement("img");
    project_image2.src="/Images/Meesho.PNG";

    pic_div2.append(project_image2);

    let project_details2=document.createElement("div");
    project_details2.setAttribute("class", "project_details");

    let project_heading2=document.createElement("h2");
    project_heading2.innerText="Meesho Clone";
    let project2_para=document.createElement("p");
    project2_para.innerText="Meesho is an online selling platform, where we can resell the products too. It deals in products related to clothing, households, kitchen, beauty, footwears etc. This was my first ever Web Development Project which I created individually.";
    
    let link_div2=document.createElement("div");
    link_div2.setAttribute("class", "link_div");

    let github_button2=document.createElement("button");
    
    let github_anchor2=document.createElement("a");
    github_anchor2.href="https://github.com/Mehul1699/Unit-2-Project-Meesho.git";
    github_anchor2.innerText="GitHub";
    github_anchor2.setAttribute("target", "_blank");

    github_button2.append(github_anchor2);

    let deployed_button2=document.createElement("button");

    let deployed_link2=document.createElement("a");
    deployed_link2.href="https://meeshoclonedwebsite1.netlify.app/";
    deployed_link2.innerText="Live";
    deployed_link2.setAttribute("target", "_blank");

    deployed_button2.append(deployed_link2);

    link_div2.append(github_button2, deployed_button2);

    let tech_div2=document.createElement("div");
    tech_div2.setAttribute("class", "tech_div");   // Common for every card

    let tech_button4=document.createElement("button");
    tech_button4.innerText="HTML";

    let tech_button5=document.createElement("button");
    tech_button5.innerText="CSS";

    let tech_button6=document.createElement("button");
    tech_button6.innerText="Javascript";

    tech_div2.append(tech_button4, tech_button5, tech_button6);
    tech_div2.setAttribute("class", "tech_div");

    project_details2.append(project_heading2, project2_para, tech_div2, link_div2);

    card2.append(pic_div2, project_details2);

    let card3 = document.createElement("div");
    card3.setAttribute("class", "cards");

    let pic_div3=document.createElement("div");
    pic_div3.setAttribute("class", "pic_div");

    let project_image3=document.createElement("img");
    project_image3.src="/Images/images.jpg";

    pic_div3.append(project_image3);

    let project_details3=document.createElement("div");
    project_details3.setAttribute("class", "project_details");

    let project_heading3=document.createElement("h2");
    project_heading3.innerText="Youtube Clone";
    let project3_para=document.createElement("p");
    project3_para.innerText="One of most used platforms in the world for watching videos, listening new songs etc. Tired of lots of advertisements on Youtube, I tried cloning Youtube with the help of Youtube API.";

    let link_div3=document.createElement("div");
    link_div3.setAttribute("class", "link_div");

    let github_button3=document.createElement("button");
    
    let github_anchor3=document.createElement("a");
    github_anchor3.href="https://github.com/Mehul1699/Youtube-API.git";
    github_anchor3.innerText="GitHub";
    github_anchor3.setAttribute("target", "_blank");

    github_button3.append(github_anchor3);

    let deployed_button3=document.createElement("button");

    let deployed_link3=document.createElement("a");
    deployed_link3.href="https://youtubeapi-es6.netlify.app/";
    deployed_link3.innerText="Live";
    deployed_link3.setAttribute("target", "_blank");

    deployed_button3.append(deployed_link3);

    link_div3.append(github_button3, deployed_button3);

    let tech_div3=document.createElement("div");
    tech_div3.setAttribute("class", "tech_div");   // Common for every card

    let tech_button7=document.createElement("button");
    tech_button7.innerText="HTML";

    let tech_button8=document.createElement("button");
    tech_button8.innerText="CSS";

    let tech_button9=document.createElement("button");
    tech_button9.innerText="Javascript";

    tech_div3.append(tech_button7, tech_button8, tech_button9);
    tech_div3.setAttribute("class", "tech_div");

    project_details3.append(project_heading3, project3_para, tech_div3, link_div3);

    card3.append(pic_div3, project_details3);

    container.append(card1, card2, card3);

    document.getElementById("projects").append(projects_mainheading, container);

    // SKILLS

    let skills_heading=document.createElement("h1");
    skills_heading.innerText="TECHNICAL SKILLS";

    let frontendskills_div=document.createElement("div");
    
    let feheading=document.createElement("h2");
    feheading.innerText="Front End Skills";

    let fediv=document.createElement("div");
    fediv.setAttribute("class", "main_skills");

    let skills_div1=document.createElement("div");
    let skills_image1=document.createElement("img");
    skills_image1.src="/Images/1200px-HTML5_logo_and_wordmark.svg.png";
    let skills_div1_data=document.createElement("p");
    skills_div1_data.innerText="HTML";
    skills_div1.append(skills_image1, skills_div1_data);

    let skills_div2=document.createElement("div");
    let skills_image2=document.createElement("img");
    skills_image2.src="/Images/CSS3_logo_and_wordmark.svg.png";
    let skills_div2_data=document.createElement("p");
    skills_div2_data.innerText="CSS";
    skills_div2.append(skills_image2, skills_div2_data);

    let skills_div3=document.createElement("div");
    let skills_image3=document.createElement("img");
    skills_image3.src="/Images/javascript_logo.png";
    let skills_div3_data=document.createElement("p");
    skills_div3_data.innerText="JavaScript";
    skills_div3.append(skills_image3, skills_div3_data);

    let backendskills_div=document.createElement("div");
    
    let beheading=document.createElement("h2");
    beheading.innerText="Back End Skills";

    let bediv=document.createElement("div");
    bediv.setAttribute("class", "main_skills");



    let skills_div4=document.createElement("div");
    let skills_image4=document.createElement("img");
    skills_image4.src="/Images/Java-tutorials.jpg";
    let skills_div4_data=document.createElement("p");
    skills_div4_data.innerText="Java";
    skills_div4.append(skills_image4, skills_div4_data);


    

    let skills_div7=document.createElement("div");
    let skills_image7=document.createElement("img");
    skills_image7.src="/Images/spring.png";
    let skills_div7_data=document.createElement("p");
    skills_div7_data.innerText="SpringBoot";
    skills_div7.append(skills_image7, skills_div7_data);

    let skills_div8=document.createElement("div");
    let skills_image8=document.createElement("img");
    skills_image8.src="/Images/hibernate.png";
    let skills_div8_data=document.createElement("p");
    skills_div8_data.innerText="Hibernate";
    skills_div8.append(skills_image8, skills_div8_data);

    let skills_div9=document.createElement("div");
    let skills_image9=document.createElement("img");
    skills_image9.src="/Images/maven.jpg";
    let skills_div9_data=document.createElement("p");
    skills_div9_data.innerText="Maven";
    skills_div9.append(skills_image9, skills_div9_data);

    let databaseskills_div=document.createElement("div");
    
    let dbheading=document.createElement("h2");
    dbheading.innerText="Database";

    let dbdiv=document.createElement("div");
    dbdiv.setAttribute("class", "main_skills");

    let skills_div6=document.createElement("div");
    let skills_image6=document.createElement("img");
    skills_image6.src="/Images/MySQL-Logo.png";
    let skills_div6_data=document.createElement("p");
    skills_div6_data.innerText="MySQL";
    skills_div6.append(skills_image6, skills_div6_data);

    let tools_div=document.createElement("div");
    
    let toolsheading=document.createElement("h2");
    toolsheading.innerText="Tools";

    let toolsdiv=document.createElement("div");
    dbdiv.setAttribute("class", "main_skills");

    let skills_div5=document.createElement("div");
    let skills_image5=document.createElement("img");
    skills_image5.src="/Images/git.0.jpg";
    let skills_div5_data=document.createElement("p");
    skills_div5_data.innerText="Git";
    skills_div5.append(skills_image5, skills_div5_data);

    let skills_div10=document.createElement("div");
    let skills_image10=document.createElement("img");
    skills_image10.src="/Images/intellij.jpg";
    let skills_div10_data=document.createElement("p");
    skills_div10_data.innerText="Intellij";
    skills_div10.append(skills_image10, skills_div10_data);

    let skills_div11=document.createElement("div");
    let skills_image11=document.createElement("img");
    skills_image11.src="/Images/sts.jpg";
    let skills_div11_data=document.createElement("p");
    skills_div11_data.innerText="STS";
    skills_div11.append(skills_image11, skills_div11_data);

    let skills_div12=document.createElement("div");
    let skills_image12=document.createElement("img");
    skills_image12.src="/Images/postman.png";
    let skills_div12_data=document.createElement("p");
    skills_div12_data.innerText="Postman";
    skills_div12.append(skills_image12, skills_div12_data);

    // skills_maindiv.append(skills_div1, skills_div2, skills_div3, skills_div4, skills_div5, skills_div6, skills_div7);

    fediv.append(skills_div1, skills_div2, skills_div3);
    frontendskills_div.append(feheading, fediv);

    bediv.append(skills_div4, skills_div7, skills_div8, skills_div9);
    backendskills_div.append(beheading, bediv);

    dbdiv.append(skills_div6);
    databaseskills_div.append(dbheading, dbdiv);

    toolsdiv.append(skills_div5, skills_div10, skills_div11, skills_div12);
    tools_div.append(toolsheading, toolsdiv);
    document.getElementById("skills").append(skills_heading, frontendskills_div, backendskills_div, databaseskills_div, tools_div);

    