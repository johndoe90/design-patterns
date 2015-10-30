
/**
 * The entertainment devices would be the implementation layer of the bridge pattern
 * ie. the remote (abstraction) bridges (delegates) to the actual implementation
 */
export abstract class EntertainmentDevice {
	protected volume = 0;

	abstract turnUpVolume();
	abstract turnDownVolume();
}

export class Tv extends EntertainmentDevice {
	public turnUpVolume() {
		this.volume++;

		console.log('Turn up the volume of the TV');
	}

	public turnDownVolume() {
		if ( this.volume > 0 )
			this.volume--;

		console.log('Turn down the volume of the TV');
	}
}

export class Radio extends EntertainmentDevice {
	public turnUpVolume() {
		this.volume++;

		console.log('Turn up the volume of the Radio');
	}

	public turnDownVolume() {
		if ( this.volume > 0 )
			this.volume--;

		console.log('Turn down the volume of the Radio');
	}
}

/**
 * The remote is the abstraction (bridge)
 */
export abstract class Remote {
	
	constructor(protected device: EntertainmentDevice) {}

	public pressUp() {
		this.device.turnUpVolume();
	}

	public pressDown() {
		this.device.turnDownVolume();
	}

	abstract pressSpecial();
}

export class MuteRemote extends Remote {
	constructor(device: EntertainmentDevice) {
		super(device);
	}

	public pressSpecial() {
		console.log('Mute the device');
	}
}

export class PauseRemote extends Remote {
	constructor(device: EntertainmentDevice) {
		super(device);
	}

	public pressSpecial() {
		console.log('Pause the device');
	}
}