'use strict';

/**
 * @ngdoc service
 * @name minervaioApp.team
 * @description
 * # team
 * Service in the minervaioApp.
 */
module.exports = function () {
    this.data = [
      {
        type: 'Founders',
        people: [
          {
            name: 'Eric Glasser',
            img: 'eric-glasser.jpg',
            description: 'Eric started his first technology company when he was a student at Vanderbilt. It was a process and content management system for newspapers. After releasing Virtual Newsroom as an open-source project, he started consulting with startups and businesses developing their web applications. He has since spent time in both the advertising world and Fortune 500 technology companies developing enterprise-level applications. He is a full stack engineer with a passion for scalable systems. His core belief is that working with technology doesn\'t have to be a painful process. Now he is looking to bring this expertise to clients with Minerva.'
          },
          {
            name: 'Ryan \'Cold\' Bush',
            img: 'ryan-bush.jpg',
            description: 'Cold has been an industry power house in the mobile realm since his inception in 2008. Working with start-ups all the way up to huge companies such as Lockheed Martin, Tata Consultancy Services, and Apple, Cold has developed a strong communication skill set that allows him to understand client needs. He has experience in every layer of application programming, from database implementations to user interfaces. Cold constantly looks for ways to improve his coding abilities and is always researching the newest code architectures. Expecting the best is a good start when working with him.'
          },
        ]
      },
      {
        type: 'Developers',
        people: [
          {
            name: 'Chris \'rot26\' Coleman',
            img: 'chris-coleman.jpg',
            description: 'Chris has been developing web applications professionally since 2008. Chris founded Rot-26 Solutions LLC in 2013 to pursue contracts with his clients full-time, primarily developing web applications with PHP and Python.  Before realigning his career goals with his passions, Chris worked as a mechanical engineer for 7 years focusing on robotics and industrial automation. He focuses on continuous improvement in his life and his work, which resonates well will with the Minerva team.',
          },
          {
            name: 'Doug Rayburn',
            img: 'doug-rayburn.jpg',
            company: 'A Prize Inside, Inc.',
            url: 'http://www.aprizeinside.com/',
            description: 'Doug is a seasoned creative technologist with over 20 years of professional experience developing enterprise systems and websites. Doug started his professional career at Cambridge Technology Partners in 1995, then served as Director of Internet Operations at DataPlay in 2000. At DataPlay he co-invented ContentKey technology, a DRM solution for DataPlay\'s quarter-sized optical disc. DataPlay won the best-in-show award at the 2001 Consumer Electronics Show.',
            hide: true
          },
          {
            name: 'Gabriel Walford',
            img: 'gabriel-walford.jpg',
            url: 'http://gabrielwalford.com/',
            description: 'Gabe is passionate about creating effective, functional, but well-architected applications that are easily understood and exciting to the user. He has experience as a full stack developer building the front end of websites and applications, back end API’s with Node and PHP, as well as physical computing / internet of things projects for internationally recognized clients.',
            hide: true
          },
          {
            name: 'Matthew Gordon',
            img: 'matthew-gordon.jpg',
            url: 'http://www.ratherironic.com/',
            description: 'Matthew is a strongly-motivated senior web developer with specific strengths in front-end web technologies. He is thoroughly proficient in the latest front-end coding standards and practices with a thirst for creating inspiring work. His goal is to utilize knowledge of web technologies to provide creative input and direction/leadership for web applications, while still maintaining the highest quality of code.',
            hide: true
          },
          {
            name: 'Mansoor Bahramand',
            img: 'mansoor-bahramand.jpg',
            company: 'Metroid',
            url: 'http://www.metroid.io/',
            description: 'Mansoor is very passionate about code and developing with best practices in mind. He is a coder, which means that he spends countless amount of hours researching and reading to find new ways to solve problems. He will hate the code he wrote six months ago, as there are always ways to improve your code and better ways to test it. He writes code to make the world a better place. He lives to code and you can find him in front of a computer coding for about 12 hours a day, never getting bored.',
            hide: true
          },
          {
            name: 'Denny Cunningham',
            img: 'denny-cunningham.jpg',
            company: 'Hoorooh Digital',
            url: 'http://hooroohdigital.com /',
            description: 'Needs Description',
            hide: true
          },
          {
            name: 'Jeffrey \'JGu\' Gu',
            img: 'jgu.jpg',
            url: 'http://www.jeffreygu.com/',
            description: 'JGu is a flexible developer interested in JavaScript frameworks, software architecture, data visualizations, and machine learning. He learned about mathematics and business at the University of Pennsylvania\'s Wharton School and web development at the Turing School of Software and Design. Vim and his mechanical keyboard keep his productivity at a maximum.',
            hide: false
          }
        ]
      },
      {
        type: 'Designers',
        people: [
          {
            name: 'Ryan Dixon',
            img: 'ryan-dixon.jpg',
            url: 'https://dribbble.com/ryndxn',
            description: 'Ryan solves brand challenges with exceptionally art-directed and progressive design solutions. He’s passionate about UI/UX, executing pixel-perfect layouts. Armed with a strong foundation in design fundamentals including layout and typography, Ryan’s main goal is to build brands and keep them relevant in an ever-changing digital culture.'
          },
          {
            name: 'Ryan McCarthy',
            img: 'ryan-mccarthy.jpg',
            url: 'http://www.mccarthyarts.com/',
            description: 'For the past 15 years Ryan has lived and breathed the graphic design, digital and multimedia realm. Whether it\'s website creation, video production, managing a team, or creative direction for a mobile app, his passion for smart design and innovation is alive in everything he does.'
          }
        ]
      },
      {
        type: 'Project Managers',
        people: [
          {
            name: 'Chris Cruz',
            img: 'chris-cruz.jpg',
            company: 'Hoorooh Digital',
            url: 'http://hooroohdigital.com /',
            description: 'Needs Description',
            hide: true
          }
        ],
        hide: true
      },
      {
        type: 'QA and Testing',
        people: [
          {
            name: 'Nolan Nichols',
            img: 'nolan-nichols.jpg',
            company: 'Top Notch, Ltd',
            url: 'http://topnotchltd.com/',
            description: 'Nolan is an accomplished senior software quality assurance engineer with experience in both manual and automated testing of web-based, enterprise and stand-alone software systems. He possesses excellent communication and collaboration skills with extensive experience in functional, exploratory, load, compatibility, regression, automation and localization test development using both advanced Agile and Waterfall methodologies. Additionally, he provides directory structure analysis and internationalized environment implementation. His skill set also includes hardware configuration, system maintenance and data recovery capabilities, workstation/lab network setup, repairs and troubleshooting.'
          },
          {
            name: 'Jake Wilson',
            img: 'jake-wilson.jpg',
            company: 'Top Notch, Ltd',
            url: 'http://topnotchltd.com/',
            description: 'Jake is an accomplished quality assurance professional. He is a certified scrum master and believes in agile testing. He has a strong passion for QA and regularly attends conferences and keeps up on the latest happenings in the QA industry. He has 15+ years experience testing mobile, software, web, enterprise applications. He can develop a QA strategy for just about anything and can execute across all facets of the release lifecycle. His motto is \"fail fast\".'
          }
        ]
      },
      {
        type: 'Advisors',
        people: [
          {
            name: 'Kishan Ananthram',
            img: 'kishan-ananthram.jpg',
            company: 'IonIndea',
            url: 'http://www.ionidea.com/',
            description: 'Kishan is an entrepreneur, technologist, business manager, and business strategy advisor. He has deep experience in information technology services and solutions, as well as in business process outsourcing. His specialties include executive leadership, strategic planning, operations management and customer relationship management.',
            hide: true
          },
          {
            name: 'Craig McDonnell',
            img: 'craig-mcdonnell.jpg',
            company: 'Charter Communications',
            url: 'https://www.charter.com/',
            description: 'Craig designs and deploys service solutions to streamline data reporting through automation to increase process efficiencies and productivity. As a technology architect, professional services business strategist and professional consultant, his responsibilities have ranged from building business plans to the development and implementation of enterprise solutions, marketing, sales and service plans.',
            hide: true
          }
        ],
        hide: true
      },
    ];
  };
