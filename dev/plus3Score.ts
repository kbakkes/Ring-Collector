/// <reference path="ringOptions.ts"/>


class AddThreeScore extends RingOptions {
    decoratedRing: SuperRing;
        
    constructor(superRing:SuperRing){
        super();
    
        this.decoratedRing = superRing;
    }
        // past geen color aan dus return de value van de ring 
        public getColor(): string {
            return this.decoratedRing.getColor();
            }    
        public effect(): string {
            return 'score'
        }
    
        public amount():number{
            return 3
        }
    
        
    }