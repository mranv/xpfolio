import { winXPAssets } from '../assets/winxp'

class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {}
  private isMuted = false

  constructor() {
    Object.entries(winXPAssets.sounds).forEach(([key, src]) => {
      this.sounds[key] = new Audio(src)
    })
  }

  play(soundName: keyof typeof winXPAssets.sounds) {
    if (!this.isMuted && this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0
      this.sounds[soundName].play()
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted
  }

  setMute(muted: boolean) {
    this.isMuted = muted
  }
}

export const soundManager = new SoundManager() 