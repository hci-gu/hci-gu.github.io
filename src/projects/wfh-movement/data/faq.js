export default [
  {
    question: 'What does the app do? ',
    answer:
      'The app visualizes your movement in the form of steps data from your phone, through Apple Health, Google Fitness or Garmin Connect. By picking a date where you started working from home, you will be able to explore whether your movement patterns have changed since you started working from home.',
  },
  {
    question: 'Why have you done this?',
    answer:
      "The app is a part of research conducted by researchers at the Division of Human-Computer Interaction at the Department of Applied IT at the University of Gothenburg. We are interested in learning more about whether the pandemic and subsequent recommendations to work from home has affected people's everyday movement patterns. We believe that this data can be useful not just for research purposes but also for the individuals who use the app to get an understanding of their movement. ",
  },
  {
    question: 'Where is my data stored?',
    answer:
      'All data is stored securely on servers within the European Union (EU) and not shared with third parties.',
  },
  {
    question: 'What will you do with the data?',
    answer:
      'The data is used to display what you see in the app. We will also use this data in our research on how working from home affects people’s movement patterns as well as people’s perception of their movement.',
  },
  {
    question: 'Who is responsible for this?',
    answer:
      'The app is a part of research conducted by researchers at the Division of Human-Computer Interaction at the Department of Applied IT at the University of Gothenburg. The developers are:  research engineer Sebastian Andreasson, Dr Vasiliki Mylonopoulou, Dr Mattias Rost and Prof. Alexandra Weilenmann. You can read more about us on our webpage: https://hci-gu.github.io/',
    replace: 'https://hci-gu.github.io/',
    link: {
      to: '/',
    },
  },
  {
    question:
      'Why do you want to know where I work and what my profession is? ',
    answer:
      'We collect demographics data as part of our research in order to compare how working from home affects different demographics differently. In future updates of the app, we also intend to make it possible to compare yourself to others within different demographics, including profession and work place. Please note that it is entirely up to you if you want to share this information with us, you can still use the app without adding this.',
  },
  {
    question: 'How can I withdraw from the study and remove my data?',
    answer:
      'You can withdraw any time from the app by going to the settings and choosing the “delete data” option. After choosing this option we remove all the data you shared with us and we have no way to retrieve them back.',
  },
  {
    question: 'Can I get a copy of my data?',
    answer:
      'You can request to delete your data from within the app as long as it is installed on your device. You may also request a copy of your data by emailing sebastian.andreasson@ait.gu.se together with a unique identifier found on the settings screen of the app (24 characters). When you uninstall the app, this identifier is lost and we can no longer identify you in the dataset and it can therefore not be requested nor deleted.',
    replace: 'sebastian.andreasson@ait.gu.se',
    link: {
      href: 'mailto:sebastian.andreasson@ait.gu.se',
    },
  },
  {
    question: 'Why can I only see other people’s data?',
    answer:
      'When the application is installed, it asks you to choose where you store your step data. If you choose that you have no steps to share, or if you have no data from before you started working from home, then you see a visualization of the data of everyone else who is using the app so far.',
  },
  {
    question: 'I can only see other people’s data, how can I add my own steps?',
    answer:
      'If you want to see a visualization of your own steps, then you choose a source by visiting the main screen and choose “add a data source”.',
  },
  {
    question:
      'I have a fitbit and want to see my steps in the WHF app, is that possible? ',
    answer:
      'Currently, the app can only get steps data from your phone collected through Apple Health, Google fitness or Garmin. We might add more devices in the future.',
  },
  {
    question: 'I swim/cycle a lot, does this count as movement in the app?',
    answer:
      'The app only considers steps as movement because steps are recognised by the built in software on smartphones we carry these days. Since swimming and cycling does not incur steps, it is not considered in this app. Unfortunately, this can result in an inaccurate view of your overall movement. For a longer discussion about what movement is, contact @rrostt.',
    replace: '@rrostt',
    link: {
      href: 'https://twitter.com/rrostt',
      twitter: true,
    },
  },
  {
    question: 'Can I be identified by the data I shared with you?',
    answer:
      'We make no connection between the data and an individual. When you install the application a random identifier is created that is used when uploading data to connect your information to your data in the database. When you uninstall the app this identifier is lost.',
  },
  {
    question: 'Are you collecting my health data?',
    answer:
      'We collect only the number of your steps and the demographic information you already shared with us. While step counts of an individual may be a health indicator, it is not considered health data in itself.',
  },
  {
    question: 'Why do I have to manually synchronise my data?',
    answer:
      'We value your privacy and we want you to have full control of data you share with us. By synchronising your steps manually you know that the application receives data from your phone.  ',
  },
]
