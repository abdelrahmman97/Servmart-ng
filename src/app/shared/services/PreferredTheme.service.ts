import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class PreferredThemeService {

	private getStoredTheme = () => localStorage.getItem( "theme" );
	private setStoreTheme = ( theme: string ) => localStorage.setItem( "theme", theme );
	public getPreferredTheme = () => {
		const storedTheme = this.getStoredTheme()
		if ( storedTheme ) {
			return storedTheme
		}
		return window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light'
	}
	public setTheme = ( theme ) => {
		if ( theme === 'auto' && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
			document.documentElement.setAttribute( 'data-bs-theme', 'dark' );
			this.setStoreTheme( theme );
		} else {
			document.documentElement.setAttribute( 'data-bs-theme', theme )
			this.setStoreTheme( theme );
		}
	}
	public load() {
		this.setTheme(this.getPreferredTheme())
	}

}
