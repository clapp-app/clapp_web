import { Howl } from 'howler'
import ClappSpriteOgg from './ClappSprite.ogg'
import ClappSpriteMp3 from './ClappSprite.mp3'

const sprite = {
  src: [ClappSpriteOgg, ClappSpriteMp3],
  sprite: {
    Clapp10: [0, 162.53968253968253],
    Clapp11: [2000, 208.97959183673453],
    Clapp12: [4000, 139.31972789115665],
    Clapp13: [6000, 139.31972789115665],
    Clapp14: [8000, 139.31972789115576],
    Clapp15: [10000, 139.31972789115576],
    Clapp16: [12000, 162.5396825396823],
    Clapp17: [14000, 139.31972789115576],
    Clapp18: [16000, 139.31972789115576],
    Clapp19: [18000, 139.31972789115576],
    Clapp1: [20000, 139.31972789115576],
    Clapp20: [22000, 162.5396825396841],
    Clapp21: [24000, 139.31972789115576],
    Clapp22: [26000, 139.31972789115576],
    Clapp23: [28000, 139.31972789115576],
    Clapp24: [30000, 139.31972789115576],
    Clapp25: [32000, 139.31972789115576],
    Clapp26: [34000, 139.31972789115576],
    Clapp27: [36000, 139.31972789115576],
    Clapp28: [38000, 162.53968253968054],
    Clapp29: [40000, 139.31972789115576],
    Clapp2: [42000, 139.31972789115576],
    Clapp30: [44000, 139.31972789115576],
    Clapp31: [46000, 162.53968253968054],
    Clapp32: [48000, 139.31972789115576],
    Clapp33: [50000, 139.31972789115576],
    Clapp34: [52000, 162.53968253968054],
    Clapp35: [54000, 162.53968253968054],
    Clapp36: [56000, 139.31972789115576],
    Clapp37: [58000, 162.53968253968054],
    Clapp38: [60000, 139.31972789115576],
    Clapp39: [62000, 139.31972789115576],
    Clapp3: [64000, 139.31972789116287],
    Clapp40: [66000, 116.09977324262388],
    Clapp41: [68000, 116.09977324262388],
    Clapp42: [70000, 139.31972789116287],
    Clapp43: [72000, 139.31972789116287],
    Clapp44: [74000, 139.31972789116287],
    Clapp45: [76000, 116.09977324262388],
    Clapp46: [78000, 92.8798185940991],
    Clapp47: [80000, 92.8798185940991],
    Clapp48: [82000, 116.09977324262388],
    Clapp49: [84000, 162.53968253968765],
    Clapp4: [86000, 162.53968253968765],
    Clapp50: [88000, 116.09977324262388],
    Clapp51: [90000, 116.09977324262388],
    Clapp52: [92000, 116.09977324262388],
    Clapp53: [94000, 116.09977324262388],
    Clapp54: [96000, 92.8798185940991],
    Clapp55: [98000, 116.09977324262388],
    Clapp56: [100000, 116.09977324262388],
    Clapp57: [102000, 116.09977324262388],
    Clapp58: [104000, 116.09977324262388],
    Clapp59: [106000, 139.31972789116287],
    Clapp5: [108000, 139.31972789116287],
    Clapp60: [110000, 116.09977324262388],
    Clapp61: [112000, 139.31972789116287],
    Clapp6: [114000, 162.53968253968765],
    Clapp7: [116000, 162.53968253968765],
    Clapp8: [118000, 139.31972789116287],
    Clapp9: [120000, 162.53968253968765]
  }
}

const sounds = new Howl({
  ...sprite,
  preload: false,
  autoUnlock: true,
  autoSuspend: false
})

export const loadSounds = () =>
  new Promise((resolve, reject) => {
    try {
      sounds.load()
      sounds.once('load', () => resolve())
      sounds.once('loaderror', e => reject(e))
    } catch (error) {
      reject(error)
    }
  })

export function playSounds() {
  const r = Math.floor(Math.random() * 60) + 1
  sounds.play(`Clapp${r}`)
}
