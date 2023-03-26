import React, { Component } from 'react'
import NewsItem from './NewsItem'


  

export class News extends Component {

  articales = [{
    "source": {
      "id": "engadget",
      "name": "Engadget"
    },
    "author": "Mariella Moon",
    "title": "Google’s Year in Search 2022 was dominated by Wordle, Ukraine and a cricket World Cup",
    "description": "Wordle topped Google's Year in Search for 2022, beating even the biggest events in the world over the past few months. Searches for the five-letter word game peaked shortly after it was acquired byThe New York Times in February, perhaps when people had to loo…",
    "url": "https://www.engadget.com/google-year-in-search-2022-123501384.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/577d8550-7618-11ed-beff-d7fb50e00414",
    "publishedAt": "2022-12-07T12:35:01Z",
    "content": "Wordle topped Google's Year in Search for 2022, beating even the biggest events in the world over the past few months. Searches for the five-letter word game peaked shortly after it was acquired byTh… [+2436 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": null,
    "title": "Can women's cricket be a money-spinner for India?",
    "description": "Indian women cricketers are hopeful that a recent decision on match fees could open more doors for them.",
    "url": "https://www.bbc.co.uk/news/av/world-asia-india-63712549",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DD08/production/_127748565_p0dj5vbf.jpg",
    "publishedAt": "2022-11-24T00:16:23Z",
    "content": "Cricket is India's most popular sport - but it still remains a male bastion in the country.\r\nSome recent decisions by administrators could change this, though, and open up more opportunities for aspi… [+495 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Cricket-White-ball juggernaut England redefining test cricket too - Reuters",
    "description": "England won the T20 World Cup in Australia to firmly establish themselves as the best white-ball team of the era and set out to revolutionise test cricket with an equally bold approach to the longest format of the game.",
    "url": "https://www.reuters.com/lifestyle/sports/cricket-white-ball-juggernaut-england-redefining-test-cricket-too-2022-12-15/",
    "urlToImage": "https://www.reuters.com/resizer/b2SFc_FjT2uhfk4K4Jv3t2niGV4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/542H5CEWGNJYZOCYFLKP2OEBGU.jpg",
    "publishedAt": "2022-12-15T02:08:00Z",
    "content": "NEW DELHI, Dec 15 (Reuters) - England won the T20 World Cup in Australia to firmly establish themselves as the best white-ball team of the era and set out to revolutionise test cricket with an equall… [+3512 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Sri Lanka hands Karunaratne suspended ban after disciplinary inquiry - Reuters",
    "description": "Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violations committed at the Twenty20 World Cup in Australia.",
    "url": "https://www.reuters.com/lifestyle/sports/sri-lanka-hands-karunaratne-suspended-ban-after-disciplinary-inquiry-2022-11-23/",
    "urlToImage": "https://www.reuters.com/resizer/GB_4DDwF3Fq1vG5wtrTJczRGVv4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L5PJLUOX3FJD5EMZBPCY2RBQ6E.jpg",
    "publishedAt": "2022-11-23T14:06:00Z",
    "content": "Nov 23 (Reuters) - Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violati… [+1417 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "World Cup 2022: How football fever is gripping cricket-crazy India",
    "description": "Fans are spending a fortune to travel to Doha to watch games and putting up cut-outs of players at home.",
    "url": "https://www.bbc.co.uk/news/world-asia-india-63645416",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7433/production/_127674792_mediaitem127674790.jpg",
    "publishedAt": "2022-11-19T01:11:13Z",
    "content": "This week, Hashir Ali and 11 of his friends will make a long trip - from Kozhikode city in the southern state of Kerala to Doha, the capital of Qatar. \r\nMr Ali, 55, a football-crazy civil engineer, a… [+5042 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": null,
    "title": "Pakistan v England: Rawalpindi win fully vindicates Ben Stokes & Brendon McCullum",
    "description": "If there were any lingering doubts, England's first-Test win against Pakistan fully vindicates the philosophy of Ben Stokes and Brendon McCullum, writes Stephan Shemilt",
    "url": "https://www.bbc.co.uk/sport/cricket/63856468",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5F27/production/_127895342_gettyimages-1245378599.jpg",
    "publishedAt": "2022-12-05T16:58:44Z",
    "content": "Jack Leach trapped Naseem Shah lbw to leave Pakistan 268 all out and seal England's win\r\nAdmit it. You had doubts, didn't you?\r\nMaybe they came when England were 141 all out in the first Test against… [+5956 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Reuters",
    "title": "Australia cricket great Ricky Ponting in hospital after heart scare",
    "description": "<ul><li>Former captain was commentating on West Indies Test</li><li>Ponting left Perth Stadium after feeling unwell</li></ul>Former Australia captain Ricky Ponting was taken to hospital on Friday after suffering a heart problem while commentating during day t…",
    "url": "https://www.theguardian.com/sport/2022/dec/02/ricky-ponting-australia-cricket-great-hospital-after-heart-scare",
    "urlToImage": "https://i.guim.co.uk/img/media/d247963c1b60f2f9f0995bee4ac7e9424bc78cc5/0_190_5712_3427/master/5712.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4f3e13c7a17b530e08e01aeeb51a9701",
    "publishedAt": "2022-12-02T11:12:34Z",
    "content": "Former Australia captain Ricky Ponting was taken to hospital on Friday after suffering a heart problem while commentating during day three of Australias first test against West Indies at Perth Stadiu… [+435 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Tanya Aldred",
    "title": "Pakistan v England: first men’s cricket Test, day one – live",
    "description": "<ul><li>Over-by-over updates from Rawalpindi (5am UK time)</li><li>Get in touch! Email Tanya or tweet her @tjaldred</li></ul>England: Zak Crawley, Ben Duckett, Ollie Pope (wicketkeepr), Joe Root, Harry Brook, Ben Stokes (captain), Will Jacks, Liam Livingstone…",
    "url": "https://www.theguardian.com/sport/live/2022/dec/01/pakistan-v-england-first-mens-cricket-test-day-one-live",
    "urlToImage": "https://i.guim.co.uk/img/media/38af94d1c51313eaccea42ac6f938cb02601fdfb/0_704_7212_4328/master/7212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=6a6d6695cd0b6c31b267212953c31903",
    "publishedAt": "2022-12-01T04:38:53Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nTime to put the kettle on, while Jos Buttler, Kumar Sangakkara and Ian Ward discuss the Test with a heavily-decorated Christmas tree… [+3392 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Guardian sport",
    "title": "Kane Williamson stands down as New Zealand Test cricket captain",
    "description": "<ul><li>Tim Southee installed as new skipper for tour of Pakistan</li><li>Williamson to remain in Black Caps team as specialist Test batter </li></ul>Kane Williamson has stepped down as captain of New Zealand’s Test team with Tim Southee to replace the 32-yea…",
    "url": "https://www.theguardian.com/sport/2022/dec/15/kane-williamson-stands-down-as-new-zealand-test-cricket-captain",
    "urlToImage": "https://i.guim.co.uk/img/media/6410d01cd6188872f3a9ecb402d46dfaa33cbbe5/0_53_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=99084f3d40a64c380e373e06f89351ad",
    "publishedAt": "2022-12-14T22:39:15Z",
    "content": "Kane Williamson has stepped down as captain of New Zealands Test team with Tim Southee to replace the 32-year-old in a move that brings to an end a hugely successful stint in charge of the Black Caps… [+2214 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Geoff Lemon",
    "title": "Justin Langer’s endless grudge threatens to cloud new cricket summer",
    "description": "Justin Langer is still angry at being deposed as national coach. But with every outburst, the Test great turned television commentator kicks holes in Pat Cummins’ current teamAnd so the Justin Langer grievance tour rolls on. A lengthy podcast interview spinni…",
    "url": "https://www.theguardian.com/sport/2022/nov/25/justin-langers-endless-grudge-threatens-to-cloud-new-cricket-summer",
    "urlToImage": "https://i.guim.co.uk/img/media/a37dfa5ceee3aa35e40bec0ab60d852f3911e9d8/0_89_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=b2479a9cceaa6fe50575f80d28c69fd7",
    "publishedAt": "2022-11-25T05:54:42Z",
    "content": "And so the Justin Langer grievance tour rolls on. A lengthy podcast interview spinning off into an online article and back pages across the News Corp stable, revisiting for the umpteenth time that th… [+7267 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Harry Taylor",
    "title": "Freddie Flintoff airlifted to hospital after crash during Top Gear filming",
    "description": "Former England cricket captain’s injuries are reportedly ‘not life-threatening’ Andrew “Freddie” Flintoff has been taken to hospital after a high-speed crash while filming the latest series of Top Gear.The former England cricket captain turned broadcaster was…",
    "url": "https://www.theguardian.com/sport/2022/dec/13/freddie-flintoff-airlifted-to-hospital-after-crash-during-top-gear-filming",
    "urlToImage": "https://i.guim.co.uk/img/media/a80d041ac420ab97353850e36982f5afb799ff52/0_286_4281_2570/master/4281.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d62783c4fbbbf07095035bf8f2f3ee2",
    "publishedAt": "2022-12-13T22:39:39Z",
    "content": "Andrew Freddie Flintoff has been taken to hospital after a high-speed crash while filming the latest series of Top Gear.\r\nThe former England cricket captain turned broadcaster was taking part in a sh… [+1967 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Warner captaincy bid alive as Australia amends code of conduct - Reuters",
    "description": "David Warner can make a belated application to overturn his life ban from leadership roles in Australia's teams after the country's cricket board amended its integrity code.",
    "url": "https://www.reuters.com/lifestyle/sports/warner-captaincy-bid-alive-australia-amends-code-conduct-2022-11-21/",
    "urlToImage": "https://www.reuters.com/resizer/tUW3vFacqBY29X_ItHyrM4CzM30=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SAUQF3A4TROFFACK44PSUF7KUU.jpg",
    "publishedAt": "2022-11-21T03:07:00Z",
    "content": "MELBOURNE, Nov 21 (Reuters) - David Warner can make a belated application to overturn his life ban from leadership roles in Australia's teams after the country's cricket board amended its integrity c… [+1441 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Australia's Marsh out for three months after ankle surgery - Reuters",
    "description": "Cricket Australia (CA) said on Friday that all-rounder Mitchell Marsh is expected to be sidelined for about three months after undergoing surgery on his left ankle.",
    "url": "https://www.reuters.com/lifestyle/sports/australias-marsh-out-three-months-after-ankle-surgery-2022-12-02/",
    "urlToImage": "https://www.reuters.com/resizer/zkKQB1Ry_FABRzyuz4fO1WeEzwE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JRQSZOFIANLQ7CLS4OSU4DJL2M.jpg",
    "publishedAt": "2022-12-02T03:39:00Z",
    "content": "Dec 2 (Reuters) - Cricket Australia (CA) said on Friday that all-rounder Mitchell Marsh is expected to be sidelined for about three months after undergoing surgery on his left ankle.\r\nThe 31-year-old… [+1140 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Williamson steps down as NZ test captain, Southee takes over - Reuters",
    "description": "Kane Williamson has stepped down as New Zealand test captain and has been replaced by Tim Southee, the country's cricket board (NZC) said on Thursday.",
    "url": "https://www.reuters.com/lifestyle/sports/williamson-steps-down-nz-test-captain-southee-takes-over-2022-12-15/",
    "urlToImage": "https://www.reuters.com/resizer/fjkS7i8vm-d3FuoiEjfFcMRN4ok=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JLEPSN6G4ZJZVKCEGQAD4BZJSU.jpg",
    "publishedAt": "2022-12-15T03:12:00Z",
    "content": "Dec 15 (Reuters) - Kane Williamson has stepped down as New Zealand test captain and has been replaced by Tim Southee, the country's cricket board (NZC) said on Thursday.\r\nAfter taking charge in 2016 … [+1126 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "England's Buttler unfazed by ODI whitewash in Australia - Reuters",
    "description": "England white-ball captain Jos Buttler is unfazed by their 3-0 whitewash in Australia and has urged the administrators to make sure bilateral cricket remains relevant.",
    "url": "https://www.reuters.com/lifestyle/sports/englands-buttler-unfazed-by-odi-whitewash-australia-2022-11-23/",
    "urlToImage": "https://www.reuters.com/resizer/F7uciY0fMYX98qsKf51N75qmxVM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SKFEQZS4RZNFXONMN3CEK6FSJM.jpg",
    "publishedAt": "2022-11-23T06:32:00Z",
    "content": "MELBOURNE, Nov 23 (Reuters) - England white-ball captain Jos Buttler is unfazed by their 3-0 whitewash in Australia and has urged the administrators to make sure bilateral cricket remains relevant.\r\n… [+1520 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "'No reason' for Pakistan and India not to host each other, Pakistan chairman Raja says - Reuters",
    "description": "Pakistan Cricket Board Chairman Ramiz Raja said on Friday that he saw no reason for India and Pakistan not to host each other in Test and white-ball games.",
    "url": "https://www.reuters.com/lifestyle/sports/no-reason-pakistan-india-not-host-each-other-pakistan-chairman-raja-says-2022-12-02/",
    "urlToImage": "https://www.reuters.com/resizer/92yEQRK9Qle1Lo4LRRUrhXXGxu4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RCWAFFYU3JKRNFRZUEF3RWQC2Y.jpg",
    "publishedAt": "2022-12-02T18:29:00Z",
    "content": "Dec 2 (Reuters) - Pakistan Cricket Board Chairman Ramiz Raja said on Friday that he saw no reason for India and Pakistan not to host each other in Test and white-ball games.\r\nBilateral cricket betwee… [+1658 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Plenty of room for all three formats to flourish, says Sehwag - Reuters",
    "description": "Twenty20 cricket has brought much-needed financial security for players and while there are concerns it may divert attention and resources away from tests and ODIs former India batsman Virender Sehwag sees no reason why all three formats cannot co-exist.",
    "url": "https://www.reuters.com/lifestyle/sports/plenty-room-all-three-formats-flourish-says-sehwag-2022-12-02/",
    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=122",
    "publishedAt": "2022-12-02T08:32:00Z",
    "content": "NEW DELHI, Dec 2 (Reuters) - Twenty20 cricket has brought much-needed financial security for players and while there are concerns it may divert attention and resources away from tests and ODIs former… [+2348 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "'I wouldn't leave South Africa, I have a kid here'",
    "description": "South African software developers discuss what it means to them to do business in the country.",
    "url": "https://www.bbc.co.uk/news/business-63646696",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/223E/production/_127666780_guys2.jpg",
    "publishedAt": "2022-11-23T00:12:14Z",
    "content": "Software firm boss Stanford Mogotsi says he remains committed to South Africa, despite the challenges of running a small IT firm in the country.\r\n\"It's my home, I have a kid, I have a family here,\" s… [+6417 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Warner at a crossroads ahead of South Africa series - Reuters",
    "description": "Australia's David Warner has rarely shied away from a fight but the long-serving opener faces one of the bigger ones of his career as he seeks runs against South Africa to stave off an unplanned exit from test cricket.",
    "url": "https://www.reuters.com/lifestyle/sports/warner-crossroads-ahead-south-africa-series-2022-12-16/",
    "urlToImage": "https://www.reuters.com/resizer/25wZlAWzxkXusa-ICDjBaAku2EI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JZRDV4GJIVKKXODOEQI3HDSW5M.jpg",
    "publishedAt": "2022-12-16T07:29:00Z",
    "content": "MELBOURNE, Dec 16 (Reuters) - Australia's David Warner has rarely shied away from a fight but the long-serving opener faces one of the bigger ones of his career as he seeks runs against South Africa … [+2071 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Head, Warner hundreds help Australia whitewash England - Reuters",
    "description": "Australia, fuelled by hundreds from Travis Head and David Warner, crushed England by 221 runs in the third one day internationals to sweep the series in front of largely empty stands at the Melbourne Cricket Ground (MCG) on Tuesday.",
    "url": "https://www.reuters.com/lifestyle/sports/head-warner-hundreds-help-australia-whitewash-england-2022-11-22/",
    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
    "publishedAt": "2022-11-22T11:36:00Z",
    "content": "MELBOURNE, Nov 22 (Reuters) - Australia, fuelled by hundreds from Travis Head and David Warner, crushed England by 221 runs in the third one day internationals to sweep the series in front of largely… [+2259 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Maharashtra's Gaikwad smashes seven sixes in an over - Reuters",
    "description": "Maharashtra batsman Ruturaj Gaikwad wrote his name in the record books by hammering seven sixes in an over - a first in List A cricket - in a Vijay Hazare Trophy match against Uttar Pradesh in Ahmedabad on Monday.",
    "url": "https://www.reuters.com/lifestyle/sports/maharashtras-gaikwad-smashes-seven-sixes-an-over-2022-11-28/",
    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=122",
    "publishedAt": "2022-11-28T09:10:00Z",
    "content": "Nov 28 (Reuters) - Maharashtra batsman Ruturaj Gaikwad wrote his name in the record books by hammering seven sixes in an over - a first in List A cricket - in a Vijay Hazare Trophy match against Utta… [+1132 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India's Kishan slams quickest ODI double century - Reuters",
    "description": "India's Ishan Kishan made history by becoming the seventh batsman in one-day international cricket to hit a double century and the fastest to achieve the feat during his country's third ODI match against Bangladesh.",
    "url": "https://www.reuters.com/lifestyle/sports/indias-kishan-slams-quickest-odi-double-century-2022-12-10/",
    "urlToImage": "https://www.reuters.com/resizer/ECKRuEuXjZfkBkEn3Tqce0r87A0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5PGMKHXKAVNE7L52UZK25Y54DY.jpg",
    "publishedAt": "2022-12-10T11:01:00Z",
    "content": "Dec 10 (Reuters) - India's Ishan Kishan made history by becoming the seventh batsman in one-day international cricket to hit a double century and the fastest to achieve the feat during his country's … [+801 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India captain Rohit to miss first test against Bangladesh - Reuters",
    "description": "India captain Rohit Sharma has been ruled out of the first of two tests this month against Bangladesh, the board of control for Cricket in India (BCCI) said on Sunday.",
    "url": "https://www.reuters.com/lifestyle/sports/india-captain-rohit-miss-first-test-against-bangladesh-2022-12-12/",
    "urlToImage": "https://www.reuters.com/resizer/6_j1lgfiHu_zHSaySpu8gK82PuU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FOELD7H7AVNMTIYK5BIXOKEFZI.jpg",
    "publishedAt": "2022-12-12T01:56:00Z",
    "content": "Dec 11 (Reuters) - India captain Rohit Sharma has been ruled out of the first of two tests this month against Bangladesh, the board of control for Cricket in India (BCCI) said on Sunday.\r\nRohit did n… [+899 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Exclusive by Ali Martin",
    "title": "ECB’s Richard Thompson: ‘It’s not quite a Packer moment, but it’s a real risk’",
    "description": "The new chair of the England and Wales Cricket Board on the challenges of balancing multiple formats and expanding diversityRichard Thompson, the new chair of the England and Wales Cricket Board, is hoping to reunite Jos Buttler’s T20 World Cup winners for a …",
    "url": "https://www.theguardian.com/sport/2022/nov/26/cricket-ecb-richard-thompson-its-not-quite-a-packer-moment-but-its-a-risk",
    "urlToImage": "https://i.guim.co.uk/img/media/b247897861d56821a83aabed8a31baea9db33ce4/0_213_3200_1920/master/3200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4a85a0ea4839697a4755097c285050e",
    "publishedAt": "2022-11-26T07:30:20Z",
    "content": "Richard Thompson, the new chair of the England and Wales Cricket Board, is hoping to reunite Jos Buttlers T20 World Cup winners for a celebration back on home soil but in an international calendar ba… [+9920 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Cricket 18-year-old Ahmed a 'very rare talent', says Ben Stokes - Reuters",
    "description": "England captain Ben Stokes has said that 18-year-old Rehan Ahmed, who has been called up to England's December test squad to face Pakistan, is a \"very rare talent\".",
    "url": "https://www.reuters.com/lifestyle/sports/cricket-18-year-old-ahmed-very-rare-talent-says-ben-stokes-2022-11-25/",
    "urlToImage": "https://www.reuters.com/resizer/uOBcedfm63NV8lpLu0D47Ko-vXU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/URRCOLQQKNNMNPF5PYQDQ6NG6E.jpg",
    "publishedAt": "2022-11-25T13:15:00Z",
    "content": "Nov 25 (Reuters) - England captain Ben Stokes has said that 18-year-old Rehan Ahmed, who has been called up to England's December test squad to face Pakistan, is a \"very rare talent\".\r\nHe would becom… [+1060 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Karachi",
    "title": "England enter Pakistan stronghold with a place in history at stake",
    "description": "With the series already secure Ben Stokes’s dynamic team head to the scene of a victory etched in English cricket folkloreAnd so to the National Stadium in Karachi, already etched in English cricket folklore as the scene of the miracle in the dark and one whe…",
    "url": "https://www.theguardian.com/sport/2022/dec/15/england-enter-pakistan-stronghold-with-a-place-in-history-at-stake-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/f7f3b006a85c804be24aadcadc5976cf9dab534a/0_98_8192_4915/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a01f0abb5eb843f5ab147bc46c9da1aa",
    "publishedAt": "2022-12-15T22:00:33Z",
    "content": "And so to the National Stadium in Karachi, already etched in English cricket folklore as the scene of the miracle in the dark and one where, 22 years on from Graham Thorpe squirting the winning runs … [+5567 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Andy Bull",
    "title": "Racism experienced by 14% of professional cricketers, survey finds",
    "description": "<ul><li>More than 50 players report discrimination in Fica survey</li><li>49% tempted to reject central contract for domestic league</li></ul>More than 50 professional cricketers from around the world have said they have been the victims of racial discriminat…",
    "url": "https://www.theguardian.com/sport/2022/nov/29/racism-experienced-by-14-of-professional-cricketers-survey-finds",
    "urlToImage": "https://i.guim.co.uk/img/media/6d64659a89bd3072c1b551c22862f09b02a060e7/0_136_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1874a57c1381860277c9951f4be855b5",
    "publishedAt": "2022-11-29T15:11:07Z",
    "content": "More than 50 professional cricketers from around the world have said they have been the victims of racial discrimination within the sport. A global survey of more than 400 current players from 11 cou… [+3080 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "Ben Stokes pledges his England match fees to Pakistan flood appeal",
    "description": "<ul><li>‘I feel it’s only right to give something back,’ says Test captain</li><li>McCullum insists tourists will stick to attacking mantra</li></ul>England’s Test captain Ben Stokes announced on Monday that he would be donating his match fees from the series…",
    "url": "https://www.theguardian.com/sport/2022/nov/28/ben-stokes-england-test-cricket-match-fees-pakistan-flood-appeal",
    "urlToImage": "https://i.guim.co.uk/img/media/e4681d2d35fa7efef30713f09cdba809c83429f7/278_0_4183_2512/master/4183.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c0c09b58a76d47e13aed3feee9e04a48",
    "publishedAt": "2022-11-28T13:54:57Z",
    "content": "Englands Test captain Ben Stokes announced on Monday that he would be donating his match fees from the series to the Pakistan flood appeal.\r\nAt least 1,600 people were killed and millions left in nee… [+3388 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Raf Nicholson",
    "title": "‘The team is ready to fly’: Jon Lewis primed for England women’s cricket role",
    "description": "<ul><li>‘You coach individuals,’ says former men’s bowling coach</li><li>‘My job is to take the handbrake off and free the players up’</li></ul>Jon Lewis is adamant that having no experience in women’s cricket will not prove a barrier to success as England wo…",
    "url": "https://www.theguardian.com/sport/2022/nov/23/jon-lewis-sure-he-can-succeed-as-head-coach-of-england-women-cricket-team",
    "urlToImage": "https://i.guim.co.uk/img/media/60d1879056a872a1ae0b881a1b2d98b1760d8ab0/273_123_2315_1388/master/2315.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e9be5a3167ed3c630b669706020fe13c",
    "publishedAt": "2022-11-23T17:19:30Z",
    "content": "Jon Lewis is adamant that having no experience in womens cricket will not prove a barrier to success as England womens new head coach. You coach individuals, you dont coach gender, he says, speaking … [+3090 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Simon Burnton",
    "title": "Azeem Rafiq accuses ECB of being in denial on racism in cricket",
    "description": "<ul><li>Former Yorkshire player says ECB tried to discredit him</li><li>Lord Patel, Yorkshire chairman, also critical of ECB</li></ul>Azeem Rafiq has accused the ECB of actively attempting to discredit him during a hearing of the department of culture, media …",
    "url": "https://www.theguardian.com/sport/2022/dec/13/azeem-rafiq-accuses-ecb-of-being-in-denial-on-racism-in-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/e955c44368d29b2a0a5d2ed0a28aea82ccf8aacc/0_5_1704_1022/master/1704.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=922663ec24d6f0bb9dc6199d1e3f6453",
    "publishedAt": "2022-12-13T17:14:02Z",
    "content": "Azeem Rafiq has accused the ECB of actively attempting to discredit him during a hearing of the department of culture, media and sport select committee in which the sports governing body was repeated… [+4496 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Guardian sport",
    "title": "Essex chairman Azeem Akhtar steps down for review into his social media",
    "description": "<ul><li>Akhtar, appointed on Monday, voluntarily stood down</li><li>‘I want to ensure club can focus on the challenges it is tackling’</li></ul>The newly installed chair of Essex County Cricket Club, Azeem Akhtar, has stepped aside after only three days to al…",
    "url": "https://www.theguardian.com/sport/2022/dec/02/essex-chairman-azeem-akhtar-steps-down-for-review-into-his-social-media",
    "urlToImage": "https://i.guim.co.uk/img/media/3c4c79a7604f521c49e7f563778bcd22d06bdb2d/0_211_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=040d3004a62c218363222f6104d441a1",
    "publishedAt": "2022-12-02T19:48:20Z",
    "content": "The newly installed chair of Essex County Cricket Club, Azeem Akhtar, has stepped aside after only three days to allow an independent review to be carried out into his historical activity on social m… [+1548 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "Selling the Hundred would require offer of ‘a few billion’, claims ECB chair",
    "description": "<ul><li>Initial bid for domestic cricket competition made last month</li><li>However it would take ‘extraordinary amount of money’ to sell</li></ul>Richard Thompson revealed an offer has been made for the Hundred but said the England and Wales Cricket Board w…",
    "url": "https://www.theguardian.com/sport/2022/dec/03/selling-the-hundred-would-require-offer-of-a-few-billion-claims-ecb-chair",
    "urlToImage": "https://i.guim.co.uk/img/media/fed0d836b756e5805d663fcb0f7df0e30667a65a/0_83_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bf73842faaf59a212b69dda9d412d52d",
    "publishedAt": "2022-12-03T11:50:04Z",
    "content": "Richard Thompson revealed an offer has been made for the Hundred but said the England and Wales Cricket Board would have to receive a few billion to consider selling its flagship competition.\r\nReport… [+2783 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Tanya Aldred (now) and Daniel Harris (later)",
    "title": "Pakistan v England: first Test, day two – live",
    "description": "<ul><li>The Spin: sign up to receive our free weekly newsletter</li><li>And feel free to mail Tanya or tweet her about the cricket</li></ul>“Will you have eggs with your chips madam?” Yes please, plus mayonnaise, caviar, chocolate cake and trifle. And while I…",
    "url": "https://www.theguardian.com/sport/live/2022/dec/02/pakistan-v-england-first-test-day-two-live-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/710b52c808d05db09a90c98c72aa491aed6de091/0_102_3430_2058/master/3430.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=49f8575f4c83f26357df7c414211d67c",
    "publishedAt": "2022-12-02T04:39:29Z",
    "content": "On Sky, theyve just run highlights of the last day of Old Trafford 2001, followed by highlights of yesterday. Crazy days.\r\nJust to recap yesterdays numbers:\r\nMost runs scored on the first day of a Te… [+1282 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "Arjun Tendulkar matches father Sachin with century on first-class debut",
    "description": "<ul><li>23-year-old scores ton for Goa in Ranji Trophy</li><li>Sachin Tendulkar made century on debut for Mumbai in 1988</li></ul>Arjun Tendulkar, son of the India great Sachin, hit a century on his first-class debut for Goa.Sachin Tendulkar, the most prolifi…",
    "url": "https://www.theguardian.com/sport/2022/dec/14/arjun-tendulkar-matches-father-sachin-with-century-on-first-class-cricket-debut",
    "urlToImage": "https://i.guim.co.uk/img/media/2ed71d7d8ad4233c7242dc7a5ac8bb48bde4ecd8/71_204_1965_1179/master/1965.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=02af73f0ecce1dbb221db29048a91f69",
    "publishedAt": "2022-12-14T12:36:31Z",
    "content": "Arjun Tendulkar, son of the India great Sachin, hit a century on his first-class debut for Goa.\r\nSachin Tendulkar, the most prolific run-scorer in the history of international cricket, began his own … [+1036 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Multan",
    "title": "Ben Stokes focuses on bigger picture in lockstep with Brendon McCullum",
    "description": "Captain goes into second Test in Pakistan relishing being one of ‘two blokes leading the charge with exactly the same mindset’For a decent indication of the machismo coursing through the veins of Ben Stokes, take his answer to a hypothetical question posed be…",
    "url": "https://www.theguardian.com/sport/2022/dec/08/ben-stokes-brendon-mccullum-england-pakistan-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/c0c98f1ea8f7b60374929fa0e1b67ab648badff5/0_153_5288_3172/master/5288.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=feb00274c77740571a0ad3ac40def29a",
    "publishedAt": "2022-12-08T07:30:47Z",
    "content": "For a decent indication of the machismo coursing through the veins of Ben Stokes, take his answer to a hypothetical question posed before the second Test against Pakistan that starts in smoggy Multan… [+5340 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Islamabad",
    "title": "Private equity firm ‘makes £400m offer’ for 75% stake in the Hundred",
    "description": "<ul><li>Bridgepoint Group reported to have made the big bid</li><li>ECB chair has voiced caution on rights ‘feeding frenzy’</li></ul>English cricket has received a “£400m private equity approach” for a majority stake in the Hundred, a potentially gamechanging…",
    "url": "https://www.theguardian.com/sport/2022/nov/26/cricket-hundred-private-equity-offer-400-million",
    "urlToImage": "https://i.guim.co.uk/img/media/54881bfadf7e5ce5faa277b0ea31c4884f735512/0_234_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=ac7f7a21fdafaef6b64f58a7dca52ce5",
    "publishedAt": "2022-11-26T13:12:44Z",
    "content": "English cricket has received a £400m private equity approach for a majority stake in the Hundred, a potentially gamechanging moment for the sport. The offer for 75% of the sports newest competition h… [+2652 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Multan",
    "title": "England can be ‘even more adventurous’ against Pakistan, says Ben Stokes",
    "description": "<ul><li>Tourists won opening Test in thrilling fashion</li><li>Shorter days possible in second match at Multan</li></ul>Ben Stokes is prepared to get “even more adventurous” with his tactics as the England captain aims to continue pushing the limits of what i…",
    "url": "https://www.theguardian.com/sport/2022/dec/07/cricket-england-can-be-even-more-adventurous-against-pakistan-says-stokes",
    "urlToImage": "https://i.guim.co.uk/img/media/5e39b1d630d296a5fb7f6c92dc45f817f1ea781b/0_109_3880_2328/master/3880.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8cc37733da916df8e1fbde0ecd079925",
    "publishedAt": "2022-12-07T22:00:35Z",
    "content": "Ben Stokes is prepared to get even more adventurous with his tactics as the England captain aims to continue pushing the limits of what is possible in Test cricket.\r\nSpeaking as he prepared for the s… [+2268 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Tanya Aldred",
    "title": "The Spin | Winter now brings big paydays not empty schedules for English cricketers",
    "description": "Long gone are the six months of no cricket for the county crew as today’s players can fill their boots across the globeIt was just over 20 years ago that Surrey’s Ed Giddins and Nadeem Shahid spent the first half of the off-season getting needles in their soc…",
    "url": "https://www.theguardian.com/sport/2022/nov/23/winter-now-brings-big-paydays-not-empty-schedules-and-emptier-pockets",
    "urlToImage": "https://i.guim.co.uk/img/media/f6ac4f9d6299d560cf2dc6a78e41fcc9a2a06851/0_69_2078_1247/master/2078.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c994557bba32361e9aef38e6f015f80a",
    "publishedAt": "2022-11-23T12:42:14Z",
    "content": "It was just over 20 years ago that Surreys Ed Giddins and Nadeem Shahid spent the first half of the off-season getting needles in their socks flogging Christmas trees at Wandsworth roundabout. Times … [+5934 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Andy Bull",
    "title": "Jos Buttler not fussed by a series defeat? Take that as a red flag on fixture overkill | Andy Bull",
    "description": "Can international cricket stay relevant with dead rubbers cropping up all over a dead-rubber logjam of a schedule?If you were listening carefully you might just have learned the answer to an ancient riddle in Melbourne, where Australia finished off their whit…",
    "url": "https://www.theguardian.com/sport/blog/2022/nov/24/jos-buttler-not-fussed-by-a-series-defeat-take-that-as-a-red-flag-on-fixture-overkill",
    "urlToImage": "https://i.guim.co.uk/img/media/3971e528bbd27a991401bdcbe9e4a7a90881143d/0_248_5200_3120/master/5200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=35fa059322d165b4630d3a903e6ab3db",
    "publishedAt": "2022-11-24T07:00:21Z",
    "content": "If you were listening carefully you might just have learned the answer to an ancient riddle in Melbourne, where Australia finished off their whitewash of England in the Contractual Obligation one-day… [+5760 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Rawalpindi",
    "title": "Lure of World Cup defence could tempt Ben Stokes out of ODI retirement",
    "description": "<ul><li>England all-rounder gave up 50-over format in July </li><li>‘Going to a World Cup is an amazing thing to do’</li></ul>Ben Stokes has hinted at a possible reversal of his retirement from one‑day cricket after an admission that the World Cup defence in …",
    "url": "https://www.theguardian.com/sport/2022/nov/30/cricket-world-cup-defence-ben-stokes-out-of-odi-cricket-retirement",
    "urlToImage": "https://i.guim.co.uk/img/media/5df19bc526b4aafdd320048a36086ae31278c648/0_106_5611_3366/master/5611.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d897b65b4a59cca228cd3d4ed1780db",
    "publishedAt": "2022-11-30T18:00:23Z",
    "content": "Ben Stokes has hinted at a possible reversal of his retirement from oneday cricket after an admission that the World Cup defence in India next year is tempting.\r\nStokes called time on his 50-over car… [+2694 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "England's 'Bazball' faces first away test in Pakistan - Reuters",
    "description": "England's first test tour of Pakistan in 17 years will also be the first chance to see how their 'Bazball' brand of cricket fares away from home, and they signalled their attacking intent by picking Liam Livingstone for the opening match in Rawalpindi.",
    "url": "https://www.reuters.com/lifestyle/sports/englands-bazball-faces-first-away-test-pakistan-2022-11-30/",
    "urlToImage": "https://www.reuters.com/resizer/_LFPS-krxoLAGN0EaIYwQRMgQLo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SWNS6F22SJOO3H3BY5NBNC3P64.jpg",
    "publishedAt": "2022-11-30T06:41:00Z",
    "content": "Nov 30 (Reuters) - England's first test tour of Pakistan in 17 years will also be the first chance to see how their 'Bazball' brand of cricket fares away from home, and they signalled their attacking… [+2133 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Mark Ramprakash",
    "title": "Stokes and McCullum have lifted the pressure from the England Test side | Mark Ramprakash",
    "description": "The idea that defeat would be acceptable as long as we gave it a go never got anywhere near any team I played inDuring the summer, as the Test side being reshaped by Ben Stokes and Brendon McCullum found immediate success on home soil, there was very much a f…",
    "url": "https://www.theguardian.com/sport/blog/2022/dec/06/cricket-stokes-mccullum-england-test",
    "urlToImage": "https://i.guim.co.uk/img/media/0aa62bafc1cadba41f8aa5fa02129e72b95b97e8/0_106_2649_1589/master/2649.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=ea5d47cae7a1ca9432c984d65bcbe8f5",
    "publishedAt": "2022-12-06T14:03:11Z",
    "content": "During the summer, as the Test side being reshaped by Ben Stokes and Brendon McCullum found immediate success on home soil, there was very much a feeling among knowledgeable cricket people that come … [+5595 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India begin World Cup preparation, but Williamson stays in present - Reuters.com",
    "description": "India skipper Shikhar Dhawan views the one-day series against New Zealand as part of their preparation for the home World Cup next year but rival captain Kane Williamson preferred to stay in the present on Thursday.",
    "url": "https://www.reuters.com/lifestyle/sports/india-begin-world-cup-preparation-williamson-stays-present-2022-11-24/",
    "urlToImage": "https://www.reuters.com/resizer/Bl1fTi0xAwTZUAOIe1F_TDFNSb8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3KPVMZI7P5OGFFDUO56ZF3XPPM.jpg",
    "publishedAt": "2022-11-24T06:53:00Z",
    "content": "Nov 24 (Reuters) - India skipper Shikhar Dhawan views the one-day series against New Zealand as part of their preparation for the home World Cup next year but rival captain Kane Williamson preferred … [+1805 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Andy Bull",
    "title": "England’s style is a sea-change in Test cricket: now will others follow the tide? | Andy Bull",
    "description": "‘Bazball’ has delivered three straight Test series wins, but the real question now is whether other teams will copy or counter itYou might have missed the sign in the window of Australia’s dressing room during the second Test against the West Indies in Adelai…",
    "url": "https://www.theguardian.com/sport/2022/dec/14/england-style-is-a-sea-change-in-test-cricket-now-will-others-follow-the-tide-bazball",
    "urlToImage": "https://i.guim.co.uk/img/media/60f1949971f71f6b27a77795788dfdb5f1ac128d/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=6ef8d4c80d03937e54ccffb55dbb1212",
    "publishedAt": "2022-12-14T15:29:41Z",
    "content": "You might have missed the sign in the window of Australias dressing room during the second Test against the West Indies in Adelaide last week. Someone had scrawled Ron Ball on a piece of paper and pr… [+5838 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "Rehan Ahmed to become England’s youngest ever men’s Test debutant",
    "description": "<ul><li>Ben Stokes names 18-year-old spinner in side for third Test</li><li>Pakistan batter Azhar Ali to retire from international cricket</li></ul>Teenage leg-spinner Rehan Ahmed will become England’s youngest men’s Test cricketer when he takes to the field …",
    "url": "https://www.theguardian.com/sport/2022/dec/16/rehan-ahmed-to-become-england-youngest-ever-mens-test-debutant-cricket-azhar-ali",
    "urlToImage": "https://i.guim.co.uk/img/media/6e6315cb8a97569762ff9ae9695233f69bbaacde/0_106_4822_2894/master/4822.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c135de49ade42443175b6db0b458b485",
    "publishedAt": "2022-12-16T09:24:38Z",
    "content": "As one international career comes to an end in Karachi, another dawns, with Pakistans Azhar Ali announcing the series finale will be his final appearance, if selected, and England confirming a much-a… [+3503 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Daniel Gallan",
    "title": "The Spin | The best of frenemies? Why the South Africa v Australia rivalry is so spicy",
    "description": "As a South African, I believe our cricketing rivalry with Australia is not rooted in our differences but in the way we’re so similarWhat is it that provokes the enmity from South Africa cricket fans towards Australia? Is it the over-sized stadiums, those tote…",
    "url": "https://www.theguardian.com/sport/2022/dec/14/the-best-of-frenemies-why-the-south-africa-v-australia-rivalry-is-so-spicy",
    "urlToImage": "https://i.guim.co.uk/img/media/c6cf72fedadabf918f89d2bd272786247484a64e/0_202_4414_2649/master/4414.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ea37f6b5a5fc19fd5c0e01e2ca8bcaac",
    "publishedAt": "2022-12-14T10:55:22Z",
    "content": "What is it that provokes the enmity from South Africa cricket fans towards Australia? Is it the over-sized stadiums, those totems to their debauchery? Their five World Cup wins in the mens game? The … [+5170 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Guptill released from New Zealand contract - Reuters",
    "description": "New Zealand opener Martin Guptill has been released from his national contract after being omitted from the squad for the India T20 series, heralding the end of the veteran batsman's international career.",
    "url": "https://www.reuters.com/lifestyle/sports/guptill-released-new-zealand-contract-2022-11-23/",
    "urlToImage": "https://www.reuters.com/resizer/vX8h5QYcNHNNs0_A0HZ8c0t559c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5N6VWXL4JFPZPDXZXMGJ4G5VVI.jpg",
    "publishedAt": "2022-11-23T00:49:00Z",
    "content": "Nov 23 (Reuters) - New Zealand opener Martin Guptill has been released from his national contract after being omitted from the squad for the India T20 series, heralding the end of the veteran batsman… [+1421 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Hannah Ellis-Petersen South Asia correspondent and KA Shaji",
    "title": "‘Our team will win’: how so many Indians started supporting Argentina",
    "description": "Better known for its love of cricket, every four years India and the wider region are gripped by World Cup feverIn one village, dozens of houses have been painted white and blue. In another, vast 10-metre statues of football star Lionel Messi have been erecte…",
    "url": "https://www.theguardian.com/football/2022/dec/17/our-team-will-win-how-so-many-indians-started-supporting-argentina-world-cup-fever",
    "urlToImage": "https://i.guim.co.uk/img/media/a0a4de380afc3dadb08b060361559d5bd14c84de/1480_1187_3019_1812/master/3019.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=88031c69ff628dcf5d9e02bd4af58190",
    "publishedAt": "2022-12-17T05:00:11Z",
    "content": "In one village, dozens of houses have been painted white and blue. In another, vast 10-metre statues of football star Lionel Messi have been erected in rivers and along roadsides. But this is not Arg… [+7782 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "James Wallace",
    "title": "Twenty years of Jimmy Anderson: from frosted tips to statistical marvel | James Wallace",
    "description": "England’s greatest fast bowler made his international debut in a one-day hammering – two decades on he is closing in on 1,000 all-format wicketsIt was 20 years ago today, Sgt Nasser asked this kid to play …It is 15 December 2002: a muggy late afternoon at the…",
    "url": "https://www.theguardian.com/sport/2022/dec/15/twenty-years-of-jimmy-anderson-from-frosted-tips-to-statistical-marvel",
    "urlToImage": "https://i.guim.co.uk/img/media/7c98be9fbafa4f693b78c115c1d789966951d371/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cd608f74475cd71db6b42464c5121220",
    "publishedAt": "2022-12-15T07:30:15Z",
    "content": "It was 20 years ago today, Sgt Nasser asked this kid to play \r\nIt is 15 December 2002: a muggy late afternoon at the Melbourne Cricket Ground and Jimmy Anderson is getting his first taste of internat… [+7147 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Multan",
    "title": "England’s Mark Wood admits he considered quitting Tests this year",
    "description": "<ul><li>Multan match-winner weighed up options in summer</li><li>Wanting to play under Stokes and McCullum was key</li></ul>There was a moment during a cruel summer of two elbow operations and no cricket that Mark Wood flirted with the idea of Test retirement…",
    "url": "https://www.theguardian.com/sport/2022/dec/13/england-pakistan-mark-wood-considered-quitting-test-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/60e6a4455a528418d92c5313d2ed186460c15f65/152_115_4211_2526/master/4211.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=da05b4a1405f1202f25008ada8587046",
    "publishedAt": "2022-12-13T18:00:30Z",
    "content": "There was a moment during a cruel summer of two elbow operations and no cricket that Mark Wood flirted with the idea of Test retirement; a nagging sense that the time may have come to park the red ba… [+5023 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Jonathan Howcroft and Rob Smyth",
    "title": "Australia v England: second one-day international – live",
    "description": "<ul><li>Updates from the second match of the ODI series at the SCG</li><li>Play at the cricket in Sydney starts at 2:20pm AEDT/3:20am GMT</li><li>Any thoughts? Email Jonathan or tweet @JPHowcroft</li></ul>Josh Hazlewood won the toss and reckons the pitch will…",
    "url": "https://www.theguardian.com/sport/live/2022/nov/19/australia-vs-england-live-updates-score-second-one-day-international-cricket-odi-latest-scores-aus-v-eng",
    "urlToImage": "https://i.guim.co.uk/img/media/0511b349119e3f760e6c2915af9225a096ca55f5/0_327_4943_2968/master/4943.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7c04613b18f57463f9ab81b243a9f986",
    "publishedAt": "2022-11-19T02:51:13Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nThis may be the best ODI series ever. Captains can't be bothered playing. Nobody really cares who wins. Headlines everywhere about S… [+3404 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Karachi",
    "title": "Ben Stokes aims for Pakistan clean sweep and ponders Rehan Ahmed debut",
    "description": "<ul><li>England have rare opportunity to win away Test series 3-0</li><li>Teenage leg-spinner could become youngest England player</li></ul>Ben Stokes has challenged his England players to turn their tour of Pakistan into a historic clean sweep as he and Bren…",
    "url": "https://www.theguardian.com/sport/2022/dec/15/ben-stokes-pakistan-clean-sweep-rehan-ahmed-england-debut-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/8fcc790510f8e840da77d3c58213e5d26ba73b29/0_239_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=66b44e2de2110adb3a06e21b9540467b",
    "publishedAt": "2022-12-15T22:00:33Z",
    "content": "Ben Stokes has challenged his England players to turn their tour of Pakistan into a historic clean sweep as he and Brendon McCullum ponder a debut for the 18-year-old Rehan Ahmed.\r\nSitting 2-0 up wit… [+3356 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Former coach Langer tears into 'cowards' on Australia team - Reuters",
    "description": "Former Australia coach Justin Langer has reopened old wounds over his acrimonious resignation, lashing out at unnamed \"cowards\" in the team who complained in the media about his intense coaching style.",
    "url": "https://www.reuters.com/lifestyle/sports/former-coach-langer-tears-into-cowards-australia-team-2022-11-23/",
    "urlToImage": "https://www.reuters.com/resizer/VkuaQ4cybGECMCmd_Si_HwBGYh0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T6KG7SXXEBM5TBWAO7RBLPMGKI.jpg",
    "publishedAt": "2022-11-23T01:45:00Z",
    "content": "MELBOURNE, Nov 23 (Reuters) - Former Australia coach Justin Langer has reopened old wounds over his acrimonious resignation, lashing out at unnamed \"cowards\" in the team who complained in the media a… [+1723 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "'Utter rubbish': Langer rejects reports of rift with Australia players - Reuters",
    "description": "Former Australia head coach Justin Langer has denied reports of a rift with captain Pat Cummins and his team, saying he remains in regular communication with the majority of the players and \"can't wait\" to catch up with them.",
    "url": "https://www.reuters.com/lifestyle/sports/utter-rubbish-langer-rejects-reports-rift-with-australia-players-2022-11-25/",
    "urlToImage": "https://www.reuters.com/resizer/oH-F9m6VTXNcW3OrQ9ezmxO1qkg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JAYZNUNGGZJDVPPM3OBHZCIU44.jpg",
    "publishedAt": "2022-11-25T04:37:00Z",
    "content": "MELBOURNE, Nov 25 (Reuters) - Former Australia head coach Justin Langer has denied reports of a rift with captain Pat Cummins and his team, saying he remains in regular communication with the majorit… [+1775 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Warner had no choice but to abandon leadership bid: players union chief - Reuters.com",
    "description": "Australia batsman David Warner was left with no choice but to abandon the bid to have his leadership ban overturned due to problems with the review process, players union chief Todd Greenberg said on Friday.",
    "url": "https://www.reuters.com/lifestyle/sports/warner-had-no-choice-abandon-leadership-bid-players-union-chief-2022-12-09/",
    "urlToImage": "https://www.reuters.com/resizer/s4gAEb2tlsBQ-FE-rbEFNl6XgGg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q4HMDKUE7ZOORORTAIFAXEUYQM.jpg",
    "publishedAt": "2022-12-09T06:51:00Z",
    "content": "MELBOURNE, Dec 9 (Reuters) - Australia batsman David Warner was left with no choice but to abandon the bid to have his leadership ban overturned due to problems with the review process, players union… [+2191 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "England's Archer 'fully back' from long injury layoff - Reuters",
    "description": "Fast bowler Jofra Archer said he was \"fully back\" from his long injury lay-off after marking his return to an England shirt by bowling for the Lions in a three-day match against the test side in the United Arab Emirates.",
    "url": "https://www.reuters.com/lifestyle/sports/englands-archer-fully-back-long-injury-layoff-2022-11-25/",
    "urlToImage": "https://www.reuters.com/resizer/bZQkcpXZ7n3qTQH_5r41ze84YWc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PK4FCKU6IFNVXGTGUJTL3XL2AE.jpg",
    "publishedAt": "2022-11-25T04:44:00Z",
    "content": "Nov 25 (Reuters) - Fast bowler Jofra Archer said he was \"fully back\" from his long injury lay-off after marking his return to an England shirt by bowling for the Lions in a three-day match against th… [+1812 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Rawalpindi among England's greatest away triumphs, says Stokes - Reuters",
    "description": "England's 74-run victory over Pakistan on a lifeless Rawalpindi track will rank among their greatest test victories away from home, captain Ben Stokes said on Monday.",
    "url": "https://www.reuters.com/lifestyle/sports/rawalpindi-among-englands-greatest-away-triumphs-says-stokes-2022-12-05/",
    "urlToImage": "https://www.reuters.com/resizer/vu30xLqjCaIHn2MdZYIFSsXx6UI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BIHICWTJUVM2PFEO2WV37OGN6I.jpg",
    "publishedAt": "2022-12-05T13:38:00Z",
    "content": "RAWALPINDI, Pakistan, Dec 5 (Reuters) - England's 74-run victory over Pakistan on a lifeless Rawalpindi track will rank among their greatest test victories away from home, captain Ben Stokes said on … [+1954 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India to go on the offensive against Bangladesh in test series opener - Reuters",
    "description": "After starting their tour of Bangladesh with defeat in a one-day international series, India's stand-in captain KL Rahul said they will come out swinging in the opening test match against the hosts beginning in Chattogram on Wednesday.",
    "url": "https://www.reuters.com/lifestyle/sports/india-go-offensive-against-bangladesh-test-series-opener-2022-12-13/",
    "urlToImage": "https://www.reuters.com/resizer/SgQ4RBjdkZ5MRl7Yy35zEepdU4s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IU4AUNWDU5OC3OZFXPBGBIDMSQ.jpg",
    "publishedAt": "2022-12-13T04:24:00Z",
    "content": "Dec 13 (Reuters) - After starting their tour of Bangladesh with defeat in a one-day international series, India's stand-in captain KL Rahul said they will come out swinging in the opening test match … [+2134 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin at Rawalpindi Stadium",
    "title": "Crawley tells England to ‘go again’ after they hit 506 runs on day one in Pakistan",
    "description": "<ul><li>Crawley scores 122 from 111 balls as England reach 506-4</li><li>England surpass opening-day record that stood for 111 years</li></ul>Zak Crawley rather summed up the carnage that he and three fellow centurions had just unleashed, ending a record-brea…",
    "url": "https://www.theguardian.com/sport/2022/dec/01/crawley-tells-england-to-go-again-after-they-hit-506-runs-on-day-one-in-pakistan",
    "urlToImage": "https://i.guim.co.uk/img/media/95aae9200d25cce74d40957270ffde6abe249bbd/0_0_3212_1927/master/3212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b9072475b5516583505e8952fae79f42",
    "publishedAt": "2022-12-01T15:04:27Z",
    "content": "Zak Crawley rather summed up the carnage that he and three fellow centurions had just unleashed, ending a record-breaking opening day for England in Pakistan by saying the team was targeting a first-… [+2980 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Rawalpindi",
    "title": "First Pakistan Test could be delayed after England squad hit with illness",
    "description": "<ul><li>Six or seven of touring squad laid low by virus before first Test</li><li>24-hour delay to match possible with ECB monitoring situation</li></ul>England and Pakistan are in discussions over a possible delayed start to their historic Test series opener…",
    "url": "https://www.theguardian.com/sport/2022/nov/30/first-pakistan-test-could-be-delayed-after-england-squad-hit-with-illness-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/98da28d54b971b70b6b74d400bc04f2475714f28/0_223_5194_3118/master/5194.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d12e283b9070a0e856db89edc4510f90",
    "publishedAt": "2022-11-30T08:46:10Z",
    "content": "England and Pakistan are in discussions over a possible delayed start to their historic Test series opener in Rawalpindi after six or seven of the tourists were laid low by a virus just 24 hours out … [+3085 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Australian Associated Press",
    "title": "David Warner withdraws bid to have lifetime captaincy ban revoked",
    "description": "In a lengthy Instagram post, Warner claimed the review panel wanted to ‘conduct a public trial of me and what occurred during the third Test’<ul><li>Get our morning and afternoon news emails, free app or daily news podcast</li></ul>David Warner will withdraw …",
    "url": "https://www.theguardian.com/sport/2022/dec/07/david-warner-withdraws-bid-to-have-lifetime-captaincy-ban-revoked",
    "urlToImage": "https://i.guim.co.uk/img/media/2a89b073a9cb4702cc40d14e23d0b28598e64fdc/0_374_5601_3362/master/5601.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7451971b7c24693467a9b6084072450a",
    "publishedAt": "2022-12-07T08:28:03Z",
    "content": "David Warner will withdraw his bid to have his lifetime captaincy ban lifted, accusing the independent panel conducting the review of wanting to publicly lynch him.\r\nIn a bombshell development on the… [+3069 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Australian Associated Press",
    "title": "India dazzle in super over to inflict first defeat of 2022 on Australia’s women",
    "description": "<ul><li>Australia 187-1; India 187-5; India win super over by four runs</li><li>Ghosh and Mandhana smash home side to thrilling victory</li></ul>Australia’s all-conquering women’s team finally lost an international but it took a dazzling super over by India’s…",
    "url": "https://www.theguardian.com/sport/2022/dec/11/india-australia-womens-second-t20-cricket-international-match-report",
    "urlToImage": "https://i.guim.co.uk/img/media/76f9ca3495bac220bace38ef754c1a9bb39326c5/0_365_3232_1939/master/3232.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4d4dad449d05a2f6e933e4df94b13264",
    "publishedAt": "2022-12-11T18:13:11Z",
    "content": "Australias all-conquering womens team finally lost an international but it took a dazzling super over by Indias big hitters to consign them to a first defeat in 2022.\r\nTheir second T20 international … [+3118 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Taha Hashim (now) and Rob Smyth (later)",
    "title": "Pakistan v England: third Test, day two – live",
    "description": "<ul><li>Updates from the second day of play in Karachi</li><li>And you can email Taha or tweet @tahahash</li></ul>Ollie Pope and Ben Duckett are out there, and Mohammad Wasim has the ball. Now, look, I don’t want people to leave me here. But there’s some madn…",
    "url": "https://www.theguardian.com/sport/live/2022/dec/18/pakistan-v-england-third-test-day-two-live",
    "urlToImage": "https://i.guim.co.uk/img/media/bf498eadc58306170cec6a63f55a5f75c6e74edf/0_291_4920_2952/master/4920.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=34fa8a3c06e83ad65a7c849e3421c2a7",
    "publishedAt": "2022-12-18T05:01:10Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\n9th over: England 33-1 (Pope 20, Duckett 13) Duckett gets his beloved sweep out to fetch a couple off Abrar. \r\n8th over: England 30-… [+2738 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "England's Livingstone out of Pakistan tour with knee injury - Reuters",
    "description": "England's Liam Livingstone has been ruled out of the remainder of their Pakistan tour after the all-rounder suffered a knee injury in his debut test in Rawalpindi, the team said on Monday.",
    "url": "https://www.reuters.com/lifestyle/sports/englands-livingstone-out-pakistan-tour-with-knee-injury-2022-12-05/",
    "urlToImage": "https://www.reuters.com/resizer/UrB3L3FFYcuSx50dkIr2dVnhnwY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HQH3ZVFLDJJ5BARI4QVFPBQQGQ.jpg",
    "publishedAt": "2022-12-05T06:00:00Z",
    "content": "RAWALPINDI, Pakistan, Dec 5 (Reuters) - England's Liam Livingstone has been ruled out of the remainder of their Pakistan tour after the all-rounder suffered a knee injury in his debut test in Rawalpi… [+665 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Imran Khan: Fist rally by former Pakistan PM since being shot at",
    "description": "The former Pakistani prime minister was shot at during a similar gathering three weeks ago.",
    "url": "https://www.bbc.co.uk/news/world-asia-63767040",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7524/production/_127788992_gettyimages-1245102659.jpg",
    "publishedAt": "2022-11-26T12:38:51Z",
    "content": "Supporters of Pakistan's ousted Prime Minister Imran Khan have gathered for a rally - his first public appearance since being shot at and injured.\r\nThousands of people are expected in Rawalpindi, whe… [+2075 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Cool Hunting"
    },
    "author": "Kelly Pau",
    "title": "The Cricket: Black Music in Evolution, 1968-69",
    "description": "During the 1960s Black Arts Movement, Amiri Baraka, AB Spellman and Larry Neal’s experimental music magazine, The Cricket, covered poetry, reviews and politics across four issues, canonizing and empowering Black artists while also embarking on their own radic…",
    "url": "http://coolhunting.com/buy/the-cricket-black-music-in-evolution-1968-69/",
    "urlToImage": "https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/12/the-cricket.jpg?fit=900%2C900&ssl=1",
    "publishedAt": "2022-12-09T17:24:31Z",
    "content": "During the 1960s Black Arts Movement, Amiri Baraka, AB Spellman and Larry Neal’s experimental music magazine, The Cricket, covered poetry, reviews and politics across four issues, canonizing and empo… [+309 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Australian Associated Press",
    "title": "David Warner’s manager claims players given permission to ball-tamper in 2016",
    "description": "<ul><li>‘They were told to do it,’ manager James Erskine claims</li><li>Warner withdraws bid to have his captaincy ban revoked</li></ul>David Warner’s manager has sensationally claimed players were given permission to tamper with the ball by unnamed officials…",
    "url": "https://www.theguardian.com/sport/2022/dec/08/david-warners-manager-says-players-given-permission-in-2016-to-tamper-with-the-ball",
    "urlToImage": "https://i.guim.co.uk/img/media/55001fe821fea22c4d8d777ce7677629086eb8c6/0_46_4407_2644/master/4407.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=afcc909d4ed2c72b0e8b15dc61c7bf6b",
    "publishedAt": "2022-12-08T07:41:05Z",
    "content": "David Warners manager has sensationally claimed players were given permission to tamper with the ball by unnamed officials some 16 months before the Cape Town scandal in 2018.\r\nThe drama surrounding … [+3652 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Geoff Lemon at Melbourne Cricket Ground",
    "title": "Australia cruise to ODI whitewash after England collapse at near-empty MCG",
    "description": "<ul><li>Australia 355-5 (win by 221 runs); England 142 all out</li><li>Head and Warner create monster partnership of 269 </li></ul>After T20 World Cup weeks in which the MCG held crowds well on the way to filling it, we came to this. Melbourne turning on anot…",
    "url": "https://www.theguardian.com/sport/2022/nov/22/australia-cruise-to-odi-whitewash-after-england-collapse-at-empty-mcg-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/099ad6ac6774557393031eb37433ae54550f7061/0_78_2944_1767/master/2944.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e479867c662175040ef5fb8e55264b9a",
    "publishedAt": "2022-11-22T11:35:47Z",
    "content": "After T20 World Cup weeks in which the MCG held crowds well on the way to filling it, we came to this. Melbourne turning on another unseasonably cold November day, scattered rain breaking up preparat… [+5120 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin",
    "title": "Essex’s Sam Cook and England Lions hungry for a taste of cricket’s big time",
    "description": "England’s development squad take on the Test team in Abu Dhabi and Essex seamer says more than pride is at stakeAcross the sea from the football and following a bellyful of white-ball cricket, England’s men turn their attention to the red. Abu Dhabi hosts a t…",
    "url": "https://www.theguardian.com/sport/2022/nov/21/sam-cook-and-england-lions-hungry-for-a-taste-of-the-big-time",
    "urlToImage": "https://i.guim.co.uk/img/media/cab660d2f4100fff88f9846765972a71f4176792/136_80_3620_2173/master/3620.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b71f38678410e8a0bec1d6f751fa0131",
    "publishedAt": "2022-11-21T12:45:18Z",
    "content": "Across the sea from the football and following a bellyful of white-ball cricket, Englands men turn their attention to the red. Abu Dhabi hosts a three-day match against the Lions starting on Wednesda… [+4690 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "John Ashdown",
    "title": "Yorkshire agree to release Gary Ballance from contract with club",
    "description": "<ul><li>Former England batsman cannot play for another county in 2023</li><li>‘The most important thing for him is to get better and play again’</li></ul>Yorkshire have agreed to release Gary Ballance from his contract with the club.The former England batsman…",
    "url": "https://www.theguardian.com/sport/2022/dec/08/yorkshire-agree-to-release-gary-ballance-from-contract-with-club-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/c8ae693ab708d6beaeb4191fb6c20225bb749f3e/439_204_4558_2735/master/4558.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3a119a1c5db1d6ef59f463184ccffad0",
    "publishedAt": "2022-12-08T11:08:03Z",
    "content": "Yorkshire have agreed to release Gary Ballance from his contract with the club.\r\nThe former England batsman, who played 23 Tests and 16 ODIs, met his former Yorkshire teammate Azeem Rafiq in August t… [+2006 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Australian Associated Press",
    "title": "Beth Mooney’s brilliant blitz guides Australia to T20 win over India",
    "description": "<ul><li>1st T20: Australia, 173-1, beat India, 172-5, by nine wickets</li><li>Opener scores 89 from 57 balls to take tourists to victory</li></ul>Beth Mooney demonstrated once again why she is perhaps the best T20 batter in women’s cricket, elegantly guiding …",
    "url": "https://www.theguardian.com/sport/2022/dec/09/beth-mooney-australia-india-womens-t20-international-cricket-match-report",
    "urlToImage": "https://i.guim.co.uk/img/media/ffe772482a9efc9a7d94fd41feff7e899913944f/358_511_3058_1835/master/3058.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5d528ac59e4ec9f3450ee849b86cbd69",
    "publishedAt": "2022-12-09T18:12:17Z",
    "content": "Beth Mooney demonstrated once again why she is perhaps the best T20 batter in womens cricket, elegantly guiding Australia to a nine-wicket triumph over India in the first of their five-match internat… [+2020 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "England take 2-0 series lead over West Indies with win in second T20",
    "description": "<ul><li>England 141-6; West Indies 125-8 | England win by 16 runs</li><li>Sophia Dunkley (43) and Maia Bouchier (24) put on strong stand</li></ul>England eclipsed the West Indies by 16 runs to go 2-0 up in their five-match T20I series in Barbados. The tourist…",
    "url": "https://www.theguardian.com/sport/2022/dec/15/england-take-2-0-series-lead-over-west-indies-with-win-in-second-t20",
    "urlToImage": "https://i.guim.co.uk/img/media/f70446d90366122391b789988fdbf4b1664e6e7b/0_219_3508_2105/master/3508.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8c209de9c57c2097c0f0224bc83b082d",
    "publishedAt": "2022-12-15T05:09:33Z",
    "content": "England eclipsed the West Indies by 16 runs to go 2-0 up in their five-match T20I series in Barbados. The tourists started with intent having chosen to bat first, but after a few quick wickets, a str… [+1735 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "Sophie Ecclestone spins into record books as England beat West Indies again",
    "description": "<ul><li>Bowler takes international wicket tally to 56 this year</li><li>England take 4-0 T20 series lead with 49-run win in Bardbados</li></ul>England took their T20 success on tour in the West Indies to four from four on Sunday, winning the second-last game …",
    "url": "https://www.theguardian.com/sport/2022/dec/19/england-west-indies-women-fourth-t20-report",
    "urlToImage": "https://i.guim.co.uk/img/media/18905ffc37e285c9683a868f1d540fc5cf6960f9/0_437_3092_1855/master/3092.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5b4070296faf23f5f5542c1eff9d12f0",
    "publishedAt": "2022-12-19T04:15:33Z",
    "content": "England took their T20 success on tour in the West Indies to four from four on Sunday, winning the second-last game by 49 runs as spinner Sophie Ecclestone claimed a new womens cricket record.\r\nThe 2… [+633 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin at Rawalpindi Cricket Stadium",
    "title": "Pakistan openers fight back in first Test in response to England’s mammoth 657",
    "description": "<ul><li>England 657; Pakistan 181-0</li><li>Hosts remain 476 runs behind at end of day two</li></ul>Friday at the Rawalpindi Cricket Stadium was a stirring experience for all but those foolish enough to be bowlers in these parts. After lunchtime prayers, the …",
    "url": "https://www.theguardian.com/sport/2022/dec/02/pakistan-openers-fight-back-in-first-test-in-response-to-englands-mammoth-657",
    "urlToImage": "https://i.guim.co.uk/img/media/cc00053cd0bfcaa16bb59d58f7fc6c077d981f95/0_322_4836_2902/master/4836.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bd20eb5fd6b8f2bd15d86748a073ab9e",
    "publishedAt": "2022-12-02T12:48:11Z",
    "content": "Friday at the Rawalpindi Cricket Stadium was a stirring experience for all but those foolish enough to be bowlers in these parts. After lunchtime prayers, the rickety old ground filled up nicely and … [+5949 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Rawalpindi",
    "title": "Duckett and Livingstone step up as England bring Bazball to Pakistan | Ali Martin",
    "description": "First Test series hosted by Pakistan against England for 17 years has generated goodwill over tourists’ bold approachBen Stokes is an England captain keen to do things differently. It includes showing his hand early and in the case of the historic series open…",
    "url": "https://www.theguardian.com/sport/2022/nov/29/cricket-england-pakistan-preview-duckett-livingstone-stokes",
    "urlToImage": "https://i.guim.co.uk/img/media/452635e040a2d871f1a227e1e175272066e7fff2/356_4_4547_2730/master/4547.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4c6e745ffdd2d3c859344cb73e07a54d",
    "publishedAt": "2022-11-29T22:00:01Z",
    "content": "Ben Stokes is an England captain keen to do things differently. It includes showing his hand early and in the case of the historic series opener against Pakistan, starting on Thursday in bustling Raw… [+6070 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Andy Bull",
    "title": "Gilbert Jessop’s record stands test of time but England likely to surpass feat | Andy Bull",
    "description": "Fastest Test century by Englishman set 120 years ago but hell for leather cricket by batters suggests it will finally be beatenEngland were 48 for five when Gilbert Jessop got to the middle, 215 runs behind. The pitch was tricky, soft, and pitted from where t…",
    "url": "https://www.theguardian.com/sport/blog/2022/dec/07/gilbert-jessops-record-stands-test-of-time-but-new-england-likely-to-surpass-feat",
    "urlToImage": "https://i.guim.co.uk/img/media/31d9a601f478766fecc0ca4590b6819ab505763d/0_109_3930_2358/master/3930.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=79e3522637f81ef583d1f2eb6325cea0",
    "publishedAt": "2022-12-07T17:00:29Z",
    "content": "England were 48 for five when Gilbert Jessop got to the middle, 215 runs behind. The pitch was tricky, soft, and pitted from where they had been playing on it after the rain, and Australias spinners,… [+5383 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Boing Boing"
    },
    "author": "Jennifer Sandlin",
    "title": "Four horses rescued from an icy pond",
    "description": "Four horse siblings—Apollo, Tilly, Sergeant, and Cricket—fell into a pond last week In Kalispell, Montana, that looked frozen solid but wasn't. The poor horses were submerged up to their necks and struggling to climb out of the 10-foot-deep pond, to no avail.…",
    "url": "https://boingboing.net/2022/12/17/four-horses-rescued-from-an-icy-pond.html",
    "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/04/Horses.jpeg?fit=1200%2C840&ssl=1",
    "publishedAt": "2022-12-17T14:07:03Z",
    "content": "Four horse siblingsApollo, Tilly, Sergeant, and Cricketfell into a pond last week In Kalispell, Montana, that looked frozen solid but wasn't. The poor horses were submerged up to their necks and stru… [+833 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Boing Boing"
    },
    "author": "Boing Boing's Shop",
    "title": "Thankful Deals: Get an early Black Friday discount on this Milani hooded blanket, now $95 off",
    "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nThe days are cold, dark, and numb, but that shouldn't stop you from being your most authentic self: a homebody sittin…",
    "url": "https://boingboing.net/2022/11/23/thankful-deals-get-an-early-black-friday-discount-on-this-milani-hooded-blanket-now-95-off.html",
    "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/11/Ij87ABF.jpeg?fit=1200%2C800&ssl=1",
    "publishedAt": "2022-11-24T01:00:00Z",
    "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nThe days are cold, dark, and numb, but that shouldn't stop … [+1773 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "NZ skipper Williamson to miss final India T20 for medical appointment - Reuters",
    "description": "New Zealand's hopes of levelling the T20 series against India with victory in the final match on Tuesday have taken a blow with captain Kane Williamson opting out of the match for a medical appointment.",
    "url": "https://www.reuters.com/lifestyle/sports/nz-skipper-williamson-miss-final-india-t20-medical-appointment-2022-11-21/",
    "urlToImage": "https://www.reuters.com/resizer/hqv8JGqlv62cBtZVnvAc5TZyePM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PRCD3Q5UPVKDBBZ5MRNWLQCL2M.jpg",
    "publishedAt": "2022-11-21T03:35:00Z",
    "content": "Nov 21 (Reuters) - New Zealand's hopes of levelling the T20 series against India with victory in the final match on Tuesday have taken a blow with captain Kane Williamson opting out of the match for … [+958 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Emma John",
    "title": "The Spin | Ben Stokes’s all-conquering captaincy marks daring England win a true great",
    "description": "Rawalpindi stands out due to the captain’s utter confidence in both the ballsy plan and his team’s ability to carry it outJoel Wilson knew it was over. You could tell from the way he pointed his finger, almost directly at Naseem Shah: so decisive, so cinemati…",
    "url": "https://www.theguardian.com/sport/2022/dec/07/ben-stokess-all-conquering-captaincy-marks-daring-england-win-a-true-great",
    "urlToImage": "https://i.guim.co.uk/img/media/b38c89bda5824f2f88c2cff7828faed38a8cf6f9/0_116_5119_3071/master/5119.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a521c38f3307b551964cb707d6c7a77c",
    "publishedAt": "2022-12-07T11:00:22Z",
    "content": "Joel Wilson knew it was over. You could tell from the way he pointed his finger, almost directly at Naseem Shah: so decisive, so cinematic, the gesture of a man who expects it to be replayed many tim… [+6000 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Vic Marks",
    "title": "The Spin | Leaking luggage, Minder and a £1,000 bonus: memories of touring Pakistan",
    "description": "A Test series in Pakistan is always eye-opening. I’ve been on three of the past four tours so I’m ready for the odd surpriseEngland are due on Thursday morning to embark upon their fifth Test series in Pakistan in the past four decades – assuming that they ca…",
    "url": "https://www.theguardian.com/sport/2022/nov/30/the-spin-cricket-memories-of-touring-pakistan-vic-marks",
    "urlToImage": "https://i.guim.co.uk/img/media/fc29c951d37080ccd96ae8d23a106bcf0bf3e469/0_173_3072_1843/master/3072.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=179a12b59247622f80192fdc2d01a9b6",
    "publishedAt": "2022-11-30T13:27:31Z",
    "content": "England are due on Thursday morning to embark upon their fifth Test series in Pakistan in the past four decades assuming that they can find 11 men sufficiently virus-free to play. A vast convoy of mi… [+6384 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Jim Waterson Media editor",
    "title": "Funding cuts mean BBC can’t compete with Netflix, says watchdog",
    "description": "BBC technology lagging behind rivals owing to strong competition for staff and years of funding cutsThe BBC is struggling to compete with Netflix because it cannot afford the salaries of tech workers required to create online services, according to the UK’s p…",
    "url": "https://www.theguardian.com/media/2022/dec/14/funding-cuts-mean-bbc-cant-compete-with-netflix-says-watchdog",
    "urlToImage": "https://i.guim.co.uk/img/media/b3b99a043bfeb9e5179c608f984865d629043f98/0_455_8023_4814/master/8023.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=09fa6391d16d0fb7da959d2da808f1fe",
    "publishedAt": "2022-12-14T06:00:47Z",
    "content": "The BBC is struggling to compete with Netflix because it cannot afford the salaries of tech workers required to create online services, according to the UKs public spending watchdog.\r\nWhile commercia… [+3925 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Geoff Lemon (now) and Jonathan Howcroft (later)",
    "title": "Australia v South Africa: first Test, day one – live",
    "description": "<ul><li>Updates as the three-Test cricket series begins at the Gabba</li><li>Start time in Brisbane is 10:20am/11:20am AEDT/12:20am GMT</li><li>Any thoughts? Email Geoff or tweet @GeoffLemonSport</li></ul>As expected. South Africa go with the keeper at six an…",
    "url": "https://www.theguardian.com/sport/live/2022/dec/17/australia-vs-south-africa-cricket-live-updates-score-first-test-day-one-latest-scores-aus-v-sa",
    "urlToImage": "https://i.guim.co.uk/img/media/5296745636e51df30d05dfc39f3963d3a1ad23de/0_0_4305_2583/master/4305.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=5f9b07dbf5ec763ff81b4a60d71006dc",
    "publishedAt": "2022-12-16T23:58:22Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\n3rd over: South Africa 12-0 (Elgar 3, Erwee 0) Theres a half-hearted invocation of the third umpire to start the over, as Elgar sque… [+6080 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Pete Pattisson in Doha",
    "title": "Inside Qatar’s ‘other’ fan zone: a night watching football with Qatar’s migrant workers",
    "description": "Unable to go to the stadiums they helped build, hundreds of migrant workers gather in a cricket stadium in the desert outside Doha to celebrate the beautiful gameIt has the big screen, the pumping music and the Fifa branding, but this is a fan zone with a dif…",
    "url": "https://www.theguardian.com/global-development/2022/nov/24/inside-qatars-other-fan-zone-a-night-watching-football-with-qatars-migrant-workers",
    "urlToImage": "https://i.guim.co.uk/img/media/82d88a045ec6f17facc320daa575095a2baa3624/0_0_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b41fa5614017ff06e7ef206bd429c3e7",
    "publishedAt": "2022-11-24T14:57:42Z",
    "content": "It has the big screen, the pumping music and the Fifa branding, but this is a fan zone with a difference. There are no visiting supporters, no women, no team colours and certainly no beer. The clue i… [+5166 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "James Wallace",
    "title": "Fielding used to bore cricketers. Now it’s an athletic spectacle",
    "description": "What was once seen as a necessary evil, or even ungentlemanly, is now an opportunity for super-fit players to shineBy James Wallace for Wisden Cricket MonthlyRob Key has dedicated his life to cricket. The current managing director of the men’s game in England…",
    "url": "https://www.theguardian.com/sport/2022/dec/01/fielding-bore-cricketers-athletic-spectacle-wisden",
    "urlToImage": "https://i.guim.co.uk/img/media/1dfbd31c94e5831429497dd601cbbfe3855a555d/0_21_2957_1774/master/2957.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0fd5ab668cc510e80273d9e63f8a474f",
    "publishedAt": "2022-12-01T12:30:46Z",
    "content": "Rob Key has dedicated his life to cricket. The current managing director of the mens game in England played professionally for the best part of 20 years and scored almost 20,000 first-class runs. He … [+10426 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Geoff Lemon at the Sydney Cricket Ground",
    "title": "Australia seal series as Starc and Zampa stall England run chase in second ODI",
    "description": "<ul><li>Second ODI: Australia (280-8) beat England (208) by 72 runs</li><li>Australia take unassailable 2-0 lead after Steve Smith hits 94</li></ul>Mitchell Starc knocked off the top and tail either side of Adam Zampa twirling through the middle, bowling out …",
    "url": "https://www.theguardian.com/sport/2022/nov/19/australia-england-second-odi-cricket-match-report",
    "urlToImage": "https://i.guim.co.uk/img/media/b76f1aeaf4c63aa0d25b481cafb383b4da1358c7/0_315_6122_3675/master/6122.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=d8f02abb2ee28786dfedd1f8ba577160",
    "publishedAt": "2022-11-19T12:26:59Z",
    "content": "Mitchell Starc knocked off the top and tail either side of Adam Zampa twirling through the middle, bowling out England 72 runs short of Australias 280 for eight at the Sydney Cricket Ground on Saturd… [+4670 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Multan",
    "title": "England’s rapid new style has Pakistan scrambling for a response",
    "description": "The home side’s wicketkeeper, Mohammad Rizwan, marvelled at the pace of England’s batting and admitted his teammates cannot change overnightAn England team batting like they are in something of a rush was hit by an immediate delay when travelling from Rawalpi…",
    "url": "https://www.theguardian.com/sport/2022/dec/06/englands-rapid-new-style-has-pakistan-scrambling-for-a-response",
    "urlToImage": "https://i.guim.co.uk/img/media/8f7135fcfd3a770f24baa4800f23d28e569a6f96/0_87_4846_2908/master/4846.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=de9dbff68ec54d8d0af4ab0f5ee76488",
    "publishedAt": "2022-12-06T18:00:18Z",
    "content": "An England team batting like they are in something of a rush was hit by an immediate delay when travelling from Rawalpindi, scene of their seismic victory against Pakistan in the first Test, to bustl… [+4272 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Geoff Lemon in Perth",
    "title": "Old firm of Labuschagne and Smith put Australia in control against West Indies",
    "description": "<ul><li>Hosts reach 293-2 on day one of the first Test in Perth</li><li>Queenslander takes command with unbeaten 154 </li></ul>After all of the short-form mayhem, the gentle rhythms of Test cricket returned. It also returned to Perth after a pandemic-enforced…",
    "url": "https://www.theguardian.com/sport/2022/nov/30/old-firm-of-labuschagne-and-smith-put-australia-in-control-against-west-indies",
    "urlToImage": "https://i.guim.co.uk/img/media/f97da2e1e60e57dc186d889ae4d34153a60fc2ca/0_174_5221_3134/master/5221.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fe94192227bdf7e6acee43cea3b60bf3",
    "publishedAt": "2022-11-30T11:19:42Z",
    "content": "After all of the short-form mayhem, the gentle rhythms of Test cricket returned. It also returned to Perth after a pandemic-enforced absence since 2019. Australias players took a knee in a gesture ag… [+3909 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "John Ashdown",
    "title": "‘Some others might try it’: Trescothick on England’s aggressive trendsetters",
    "description": "Batting coach believes Ben Stokes and co are pioneering a ‘different style’ that opposition teams will soon try to imitateFor England’s elite batting coach, the Test team’s new all-out attack mindset has its drawbacks. While previous incumbents could be forgi…",
    "url": "https://www.theguardian.com/sport/2022/dec/08/marcus-trescothick-england-ben-stokes-pakistan-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/da4fc6e16deda0a4cfc10e4df684535c08f58002/0_0_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2bf23cdfcba6e03609180a5224a8b974",
    "publishedAt": "2022-12-08T18:00:01Z",
    "content": "For Englands elite batting coach, the Test teams new all-out attack mindset has its drawbacks. While previous incumbents could be forgiven for letting their minds wander during sedate throw-down dril… [+4050 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin in Karachi",
    "title": "Anderson suggests England’s aggression can pose Australia problems in Ashes",
    "description": "<ul><li>‘I’m sure they’ll try to come back just as hard as they can’</li><li>Anderson sits out third Test in Pakistan with series won</li></ul>Jimmy Anderson fancies England’s new buccaneering approach under Ben Stokes and Brendon McCullum may force Australia…",
    "url": "https://www.theguardian.com/sport/2022/dec/16/jimmy-anderson-suggests-england-aggression-can-pose-australia-problems-ashes-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/cf8e9ec38343929ea07dd1bf4ba4319f768616b1/0_219_3287_1972/master/3287.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a6ea50879f5d0169aa3e08cd5af51a0",
    "publishedAt": "2022-12-16T18:00:02Z",
    "content": "Jimmy Anderson fancies Englands new buccaneering approach under Ben Stokes and Brendon McCullum may force Australia to rethink their plans ahead of next summers much-anticipated Ashes series.\r\nThe 40… [+4349 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Tanya Aldred (now) and Rob Smyth (later)",
    "title": "Pakistan v England: third Test, day one – live",
    "description": "<ul><li>Updates from the first day’s play in Karachi</li><li>Get in touch: contact Tanya by email or on Twitter</li></ul>Good morning from the Baltic UK. But scrap the weather, who is this coming over the hill? It’s Rehan Ahmed, in a Test cap, England’s young…",
    "url": "https://www.theguardian.com/sport/live/2022/dec/17/pakistan-v-england-third-test-day-one-live",
    "urlToImage": "https://i.guim.co.uk/img/media/e3cb48045fa6ea5b1550e8abd767cd2457887c65/0_193_5644_3388/master/5644.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=54f30f4b1e4b5bcd97a350965b66277c",
    "publishedAt": "2022-12-17T04:00:10Z",
    "content": "Good morning from the Baltic UK. But scrap the weather, who is this coming over the hill? Its Rehan Ahmed, in a Test cap, Englands youngest ever male Test cricketer, at 18 years and 26 days, 23 days … [+1110 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Rachel Hall and Harry Taylor",
    "title": "Freddie Flintoff recovering after Top Gear crash, says Piers Morgan",
    "description": "Friend and fellow broadcaster says former England cricketer will be OK after ‘pretty serious crash’Andrew “Freddie” Flintoff is recovering from an accident while filming for Top Gear, according to his friend and fellow broadcaster Piers Morgan.The former Engl…",
    "url": "https://www.theguardian.com/sport/2022/dec/14/freddie-flintoff-recovering-after-top-gear-crash-says-piers-morgan",
    "urlToImage": "https://i.guim.co.uk/img/media/a80d041ac420ab97353850e36982f5afb799ff52/0_286_4281_2570/master/4281.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d62783c4fbbbf07095035bf8f2f3ee2",
    "publishedAt": "2022-12-14T18:24:12Z",
    "content": "Andrew Freddie Flintoff is recovering from an accident while filming for Top Gear, according to his friend and fellow broadcaster Piers Morgan.\r\nThe former England cricketer, 45, received medical car… [+3551 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin at the National Stadium",
    "title": "History-maker Rehan Ahmed calls England debut the ‘best day of my life’",
    "description": "<ul><li>18-year-old becomes England’s youngest men’s Test cricketer</li><li>Leg-spinner overcomes nervous start to claim two key wickets</li></ul>Rehan Ahmed wore a smile as wide as the Arabian Sea as he walked off the pitch in Karachi and declared it “the be…",
    "url": "https://www.theguardian.com/sport/2022/dec/17/history-maker-rehan-ahmed-calls-england-debut-the-best-day-of-my-life",
    "urlToImage": "https://i.guim.co.uk/img/media/80fa2843ffc97d6cd7370d5fa319c4d06dbcd3bd/0_45_4482_2690/master/4482.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=f48b6acdbc860de27c1f26052922c77d",
    "publishedAt": "2022-12-17T14:55:28Z",
    "content": "Rehan Ahmed wore a smile as wide as the Arabian Sea as he walked off the pitch in Karachi and declared it the best day of my life. On a tour of Pakistan already dripping in history, Ahmeds debut cont… [+2665 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Ali Martin at the Multan Cricket Stadium",
    "title": "‘We know what we’ve achieved’: Stokes lauds England’s series win in Pakistan",
    "description": "<ul><li>England take unassailable 2-0 lead after 26-run victory</li><li>‘It’s a very special thing in English cricket to come here and win’</li></ul>Ben Stokes was in no doubt about the magnitude of England’s latest mind-boggling achievement after a tense, st…",
    "url": "https://www.theguardian.com/sport/2022/dec/12/we-know-what-weve-achieved-stokes-lauds-englands-series-win-in-pakistan",
    "urlToImage": "https://i.guim.co.uk/img/media/91c1180177a2e5d3b1c544f17273d365a15cc7df/0_191_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0e3963718284dfac42524e47c169bc8e",
    "publishedAt": "2022-12-12T14:51:42Z",
    "content": "Ben Stokes was in no doubt about the magnitude of Englands latest mind-boggling achievement after a tense, stomach-churning 26-run win in the second Test in Multan.\r\nDefending 355 on a dusty, lifeles… [+3098 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Rachel Hall and Harry Taylor",
    "title": "Freddie Flintoff ‘lucky to be alive’ after Top Gear crash, says son",
    "description": "Former England cricketer still in hospital after high-speed crash while filming latest series of BBC showAndrew “Freddie” Flintoff’s son has said his father was “lucky to be alive” following a car crash during the filming the latest series of the BBC’s Top Ge…",
    "url": "https://www.theguardian.com/sport/2022/dec/14/freddie-flintoff-lucky-to-be-alive-after-top-gear-crash-says-son",
    "urlToImage": "https://i.guim.co.uk/img/media/a80d041ac420ab97353850e36982f5afb799ff52/0_286_4281_2570/master/4281.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d62783c4fbbbf07095035bf8f2f3ee2",
    "publishedAt": "2022-12-14T13:03:04Z",
    "content": "Andrew Freddie Flintoffs son has said his father was lucky to be alive following a car crash during the filming the latest series of the BBCs Top Gear show.\r\nThe former England cricketer received med… [+2440 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": "Adnan Abidi",
    "title": "Air pollution blights India's teeming capital | The Wider Image | Reuters - The Wider Image",
    "description": "A smoky haze hangs over India's northern plains and its capital, New Delhi, every year as winter sets in, raising fears for the health of many millions of people as authorities order fixes that do little to clear the air.",
    "url": "https://widerimage.reuters.com/story/air-pollution-blights-indias-teeming-capital",
    "urlToImage": "https://photos.wi.gcs.trstatic.net/WBTnOVC7qqta06gXHeKsQ02y8ugClG3VsSWZ9xlG53lpV9mVONTBsMoB1c03itzxEjKlcybWOPTeYPzso07EIqS_MokQXxY9sV21MIWRNPf3BnoRaxPMlSVjCHadIS6n",
    "publishedAt": "2022-12-14T07:52:01Z",
    "content": "A farmer walks in the morning smog in a field on the bank of the Yamuna river in New Delhi, India.\r\nPeople play cricket as heavy smog sets in a field in New Delhi, India.\r\nHindu devotees gather to wo… [+1549 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "England's Stokes to donate match fees from Pakistan series to flood victims - Reuters",
    "description": "England captain Ben Stokes will donate his match fees from their three-test series against hosts Pakistan to help the victims of devastating floods in the country, the 31-year-old said in a statement on Monday.",
    "url": "https://www.reuters.com/lifestyle/sports/englands-stokes-donate-match-fees-pakistan-series-flood-victims-2022-11-28/",
    "urlToImage": "https://www.reuters.com/resizer/TGR8IlzMOeKONX-ja6OlpME_qPU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NMOE3T27NJNK5B2ZNALC6SDG7A.jpg",
    "publishedAt": "2022-11-28T11:10:00Z",
    "content": "Nov 28 (Reuters) - England captain Ben Stokes will donate his match fees from their three-test series against hosts Pakistan to help the victims of devastating floods in the country, the 31-year-old … [+1358 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India tax panel may not reach consensus on taxing online gaming - source - Reuters",
    "description": "A panel of Indian state finance ministers has yet to submit its report on taxation of the booming online gaming sector that is crucial to a final decision on how the levies should be imposed, a senior government official said on Monday.",
    "url": "https://www.reuters.com/technology/india-tax-panel-may-not-reach-consensus-taxing-online-gaming-source-2022-12-05/",
    "urlToImage": "https://www.reuters.com/resizer/M-ADvuSYzb_OaIBkUs3B08wWKG0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AHPZVDXDYJM6LKBVIAIWXMZECI.jpg",
    "publishedAt": "2022-12-05T09:34:00Z",
    "content": "NEW DELHI, Dec 5 (Reuters) - A panel of Indian state finance ministers has yet to submit its report on taxation of the booming online gaming sector that is crucial to a final decision on how the levi… [+1747 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "PA Media",
    "title": "England win third T20 to claim touring series against West Indies",
    "description": "<ul><li>England 157-6; West Indies 140-8 | England win by 17 runs</li><li>Captain Heather Knight scores quickfire 43 off 27 balls </li></ul>England have added a T20 series victory to go with their ODI sweep after defeating the West Indies by 17 runs in Bridge…",
    "url": "https://www.theguardian.com/sport/2022/dec/18/england-win-third-t20-to-claim-touring-series-against-west-indies",
    "urlToImage": "https://i.guim.co.uk/img/media/5cb19c0f1655453b723de77511f17e9125b9fb09/0_225_3860_2317/master/3860.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35687216cf75a85c49286f596e1f2afa",
    "publishedAt": "2022-12-18T04:00:09Z",
    "content": "England have added a T20 series victory to go with their ODI sweep after defeating the West Indies by 17 runs in Bridgetown.\r\nTouring captain Heather Knight won the toss and elected to bat, contribut… [+1390 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Guardian"
    },
    "author": "Exclusive by Ali Martin",
    "title": "Jeetan Patel: ‘The way we operate now, I’d love to play for England’",
    "description": "Spin coach believes the tourists have the players – Jacks, Livingstone and Leach – who can take the game to PakistanAs the England coach with a specialism in spin bowling, Jeetan Patel could have been forgiven for assessing his charges for the Pakistan series…",
    "url": "https://www.theguardian.com/sport/2022/nov/27/jeetan-patel-the-way-we-operate-now-id-love-to-play-for-england",
    "urlToImage": "https://i.guim.co.uk/img/media/f59a69d19ba63af32809de0cf8ac9d121ddc0508/214_76_4894_2936/master/4894.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=a474454477a569851962fc8204057e5b",
    "publishedAt": "2022-11-27T07:30:14Z",
    "content": "As the England coach with a specialism in spin bowling, Jeetan Patel could have been forgiven for assessing his charges for the Pakistan series and invoking the words of Archie MacLaren, the captain … [+7263 chars]"
  }
  ]
  constructor() {

    super();
    

    console.log("Hello i am constructor from News component");
    this.state = {
      articales: this.articales,
      loading:false
    }
  }

    //const [loading, setLoading] = useState(true);

    
  //for fetch api
  async componentDidMount()
  {
    let urll="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=69a7f847b4dd41b0bb6f8cb01ed0ff8d";
    let data=await fetch(urll);
    let parseData=await data.json()
    console.log(parseData);
   // this.setState({articles:parseData.articales})
   
   this.setState({articales:parseData.articales})
  }
  render() {


    return (
      

      <div className='container my-8'>
        <h2 classname="container my-5">Today News Headline</h2>
        <div className="row">

          {this.articales.map((element) => {
           return <div className = "col md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
        })}



      </div>
        </div >
    )
  }
}

export default News
