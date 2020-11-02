export interface IdolData {
  name: string,
  index: number,
  urlName: string
  channelURL: string
}

const IDOLS: IdolData[] = [
  {
    name: "ときのそら",
    index: 0,
    urlName: "sora",
    channelURL: "https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg"
  },
  {
    name: "AZKi",
    index: 1,
    urlName: "azuki",
    channelURL: "https://www.youtube.com/channel/UC0TXe_LYZ4scaW2XMyi5_kw"
  },
  {
    name: "ロボ子さん",
    index: 2,
    urlName: "roboco",
    channelURL: "https://www.youtube.com/channel/UCDqI2jOz0weumE8s7paEk6g"
  },
  {
    name: "さくらみこ",
    index: 3,
    urlName: "miko",
    channelURL: "https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA"
  },
  {
    name: "白上フブキ",
    index: 4,
    urlName: "fubuki",
    channelURL: "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg"
  },
  {
    name: "夏色まつり",
    index: 5,
    urlName: "matsuri",
    channelURL: "https://www.youtube.com/channel/UCQ0UDLQCjY0rmuxCDE38FGg"
  },
  {
    name: "夜空メル",
    index: 6,
    urlName: "mel",
    channelURL: "https://www.youtube.com/channel/UCD8HOxPs4Xvsm8H0ZxXGiBw"
  },
  {
    name: "赤井はあと",
    index: 7,
    urlName: "haachama",
    channelURL: "https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg"
  },
  {
    name: "アキ・ローゼンタール",
    index: 8,
    urlName: "akiroze",
    channelURL: "https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA"
  },
  {
    name: "港あくあ",
    index: 9,
    urlName: "aqua",
    channelURL: "https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg"
  },
  {
    name: "癒月ちょこ",
    index: 10,
    urlName: "choco",
    channelURL: "https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg"
  },
  {
    name: "百鬼あやめ",
    index: 11,
    urlName: "ayame",
    channelURL: "https://www.youtube.com/channel/UC7fk0CB07ly8oSl0aqKkqFg"
  },
  {
    name: "紫咲シオン",
    index: 12,
    urlName: "shion",
    channelURL: "https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw"
  },
  {
    name: "大空スバル",
    index: 13,
    urlName: "subaru",
    channelURL: "https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA"
  },
  {
    name: "大神ミオ",
    index: 14,
    urlName: "mio",
    channelURL: "https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg"
  },
  {
    name: "猫又おかゆ",
    index: 15,
    urlName: "okayu",
    channelURL: "https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw"
  },
  {
    name: "戌神ころね",
    index: 16,
    urlName: "korone",
    channelURL: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q"
  },
  {
    name: "不知火フレア",
    index: 17,
    urlName: "flare",
    channelURL: "https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg"
  },
  {
    name: "白銀ノエル",
    index: 18,
    urlName: "noel",
    channelURL: "https://www.youtube.com/channel/UCdyqAaZDKHXg4Ahi7VENThQ"
  },
  {
    name: "宝鐘マリン",
    index: 19,
    urlName: "marine",
    channelURL: "https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
  },
  {
    name: "兎田ぺこら",
    index: 20,
    urlName: "pekora",
    channelURL: "https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ"
  },
  {
    name: "潤羽るしあ",
    index: 21,
    urlName: "rushia",
    channelURL: "https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ"
  },
  {
    name: "星街すいせい",
    index: 22,
    urlName: "suisei",
    channelURL: "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A"
  },
  {
    name: "天音かなた",
    index: 23,
    urlName: "kanata",
    channelURL: "https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg"
  },
  {
    name: "桐生ココ",
    index: 24,
    urlName: "coco",
    channelURL: "https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w"
  },
  {
    name: "角巻わため",
    index: 25,
    urlName: "watame",
    channelURL: "https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA"
  },
  {
    name: "常闇トワ",
    index: 26,
    urlName: "towa",
    channelURL: "https://www.youtube.com/channel/UC1uv2Oq6kNxgATlCiez59hw"
  },
  {
    name: "姫森ルーナ",
    index: 27,
    urlName: "luna",
    channelURL: "https://www.youtube.com/channel/UCa9Y57gfeY0Zro_noHRVrnw"
  },
  {
    name: "雪花ラミィ",
    index: 28,
    urlName: "lamy",
    channelURL: "https://www.youtube.com/channel/UCFKOVgVbGmX65RxO3EtH3iw"
  },
  {
    name: "桃鈴ねね",
    index: 29,
    urlName: "nene",
    channelURL: "https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA"
  }
]

export function getIdolIndex(idolName: string): number {
  let index: number | undefined = undefined

  for(const element of IDOLS){
    if (element.name === idolName || element.urlName === idolName){
      index = element.index
      break
    }
  }

  if(index === undefined){
    throw new Error('index of not found.')
  }
  return index
}

export function getIdolData(idolIndex: number): (IdolData | undefined) {
  for(const element of IDOLS){
    if(element.index === idolIndex){
      return element
    }
  }
}

export function getAllLength(): number {
  return IDOLS.length
}
