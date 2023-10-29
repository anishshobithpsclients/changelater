export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#home',
    },
    {
      text: 'Services',
      href: '#services',
    },
    {
      text: 'Gallery',
      href: '#gallery',
    },
    {
      text: 'Accommodations',
      href: '#accommodations',
    }
  ],
  actions: [
    {
      text: 'Book Now via WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=99806%C2%A077640&text=Hello, I\'m ready to book my Dandeli adventure! 🌲🚣 Please confirm my reservation. Excitement is building!&type=phone_number&app_absent=0',
      target: '_blank',
      icon: 'tabler:brand-whatsapp'
    },
    {
      text: 'Contact Us',
      href: 'mailto:example@example.com',
      target: '_blank',
      icon: 'tabler:mail'
    }
  ],
};

export const footerData = {
  links:[],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://anishshobithps.com/favicon.svg)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://anishshobithps.com/"> Anish Shobith P S</a> · All rights reserved.
  `,
};
