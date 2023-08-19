/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//get sections container "<main>" by tag name
const main = document.getElementsByTagName("main");
//create section element as section 4
const sectionFour = document.createElement("section");
//get ul from navbar by id
const ulNavbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// Function to check if a section is in the viewport
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

// Function to add the active class to the section in view and remove it from the rest
function toggleActiveState() {
    sections.forEach((section) => {
      //get id of section link
      const sectionLink = document.getElementById(`${section.id}-link`);
      if (isInViewport(section)) {
        sectionLink.classList.add('active-nav');
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
        sectionLink.classList.remove('active-nav');
      }
    });
  }

/**
 * End Main Functions
 *
 * Begin Adding Section 4
 * 
*/

//Set id for Section 4
sectionFour.setAttribute('id', 'section4');

//Set data-nav for Section 4
sectionFour.setAttribute('data-nav', 'Section 4');

//Add Content of Section 4
sectionFour.innerHTML = `
<div class="landing__container">
  <h2>Section 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
`;

//Add Section 4 to main tag with others sections
main[0].appendChild(sectionFour);

/**
 * End Added Section 4
 * 
*/

//get all sections
const sections = document.querySelectorAll('section');




// add navbar elements
sections.forEach((section) => {
    //get name of section taht stored in data-nav attribute
    let sectionTitle = section.getAttribute("data-nav");
    
    //create li element
    const newLi = document.createElement("li");

    //create a element "link"
    const li_link = document.createElement("a");
   

    //add class,content and attribuite for link
    li_link.className = "menu__link";
    li_link.setAttribute("href",`#${section.id}`);
    //set id for each section link
    li_link.setAttribute("id",`${section.id}-link`);
    li_link.innerHTML = sectionTitle;

    //append link to the li
    newLi.append(li_link);
    //append li to the ul
    ulNavbar.appendChild(newLi);
});



/**
 * Begin Events
 * 
*/

// Event listener for scrolling the page
window.addEventListener('scroll', toggleActiveState);


/**
 * End Events
 * 
*/