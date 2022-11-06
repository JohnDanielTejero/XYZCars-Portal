import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class CarSelectService{

  cars:any = [{
    "model": "2022 Nissan Versa",
    "type": "Sedan",
    "manufacturer": "Nissan",
    "description": "The 2022 Nissan Versa sedan is a fine transportation tool for getting passengers from point A to point B, but it also makes the journey more enjoyable than many other subcompact cars. Not only is the Nissan handsome, it has a price tag that's affordable for almost everyone. While almost everyone will also find its four-cylinder engine to be ill-equipped for prompt highway passes, they should find its highway fuel economy to be impressive. The Versa's smooth ride and cushy front seats make it a relaxing chariot for daily commutes, and it's available with more driver assists than its classmates. Although some of those alternatives are better to drive, the 2022 Versa is a very good little car for folks who care most about comfort and safety.",
    "imgsrc": "../../assets/cars-img/Sedan/nissan versa.jpg",
    "price": "$16,205"
}, {
    "model": "2022 Honda Civic",
    "type": "Sedan",
    "manufacturer": "Honda",
    "description": "The Honda Civic has a reputation built on 50 years of affordability, efficiency and durability, and the 2022 redesign looks to keep that tradition going strong. This 11th-generation Civic gets a thorough makeover inside and out. Some may say the new Civic's more conventional design is boring compared to the previous model's flamboyance, but we contend it's cleaner and more refined. There's little new under the hood, where you'll still find a base four-cylinder engine or a turbocharged four-cylinder that provides quicker acceleration. As for technology features, Honda is often slower than other automakers to incorporate exotic features into its more budget-friendly cars. However, this Civic does have a few new additions. On the top-level Touring and Si trims, for instance, there's a wireless charging pad, a digital instrument panel, and a 9-inch touchscreen with additional wireless functionality for CarPlay and Android Auto smartphone integration.",
    "imgsrc": "../../assets/cars-img/Sedan/honda civic.jpg",
    "price": "$23,365"
}, {
    "model": "2022 Toyota Avalon",
    "type": "Sedan",
    "manufacturer": "Toyota",
    "description": "Toyota's flagship sedan, the 2022 Avalon, sports an aggressive look but underneath it's a big softie. Based on the mid-size Camry, the full-size Avalon offers either a V-6 or hybrid powertrain, front-wheel drive, and a spacious cabin that's all-day comfortable. It comes standard with a comprehensive suite of driver-assistance features and has most of the infotainment goodies that modern drivers need without being overly complicated.",
    "imgsrc": "../../assets/cars-img/Sedan/toyota avalon.jpg",
    "price": "$37,400"
}, {
    "model": "2022 Toyota Corolla",
    "type": "Sedan",
    "manufacturer": "Toyota",
    "description": "The Corolla is available in hatchback and sedan body styles, and it impresses with its comfy front seats, cushioned ride, and great gas mileage (upward of 32/41 mpg city/highway). The interior is upscale, and the touch-screen infotainment system is easy to use. The Corolla also has a wide range of standard safety features.",
    "imgsrc": "../../assets/cars-img/Sedan/toyota corolla.jpg",
    "price": "$21,200"
}, {
    "model": "2022 Dodge Charger",
    "type": "Sedan",
    "manufacturer": "Dodge",
    "description": "The 2022 Dodge Charger has the distinction of being the only V-8-powered sedan that starts under $40,000. While the Chrysler 300 also offers a V-8 with a rear-wheel-drive layout, it's fancier and pricier. The Charger is less refined, with questionable interior quality and an overly firm ride that gets worse on the optional 20-inch wheels. As with the Dodge Challenger coupe, it has a standard V-6 and available all-wheel drive.",
    "imgsrc": "../../assets/cars-img/Sedan/dodge charger.jpg",
    "price": "$34,095"
}, {
    "model": "2022 Hyundai Kona",
    "type": "SUV",
    "manufacturer": "Hyundai",
    "description": "The 2022 Hyundai Kona is a subcompact SUV that offers a lot for its accessible price. For the 2022 model year, the Kona receives its first major makeover since its 2018 debut. From the outside, it's sharper and sleeker than its predecessors, and a new N Line trim adds a distinctly sporty look. The interior changes are more subtle, with a reworked center stack (where the dashboard meets the center console) and new materials and ambient lighting.",
    "imgsrc": "../../assets/cars-img/SUV/hyundai kona.jpg",
    "price": "$22,545"
}, {
    "model": "2022 Nissan Kicks",
    "type": "SUV",
    "manufacturer": "Nissan",
    "description": "In terms of its size, the 2022 Nissan Kicks is the smallest SUV in the automaker's lineup, slotting in below the Rogue Sport. In terms of its price, the 2022 Kicks is the most affordable of Nissan's SUVs, yet it still offers as standard equipment the infotainment and safety technologies its cash-strapped buyers want most. But in terms of its performance, an underpowered engine and lack of all-wheel drive might make you question whether the Nissan Kicks is an SUV at all.",
    "imgsrc": "../../assets/cars-img/SUV/nissan kicks.jpg",
    "price": "$21,025"
}, {
    "model": "2022 Chevrolet Tahoe",
    "type": "SUV",
    "manufacturer": "Chevrolet",
    "description": "The Chevrolet Tahoe is a nice and roomy full-size SUV that can accommodate up to eight passengers in its cabin when it debuts in 2022. Tahoe is available with a variety of engines, including a 5.3-l V8 engine, a 6.2-V8l gasoline engine, and a 3.0-l diesel engine, which are all capable of moving a large SUV.",
    "imgsrc": "../../assets/cars-img/SUV/chevrolet tahoe.jpg",
    "price": "$51,795"
}, {
    "model": "2022 Honda Odyssey",
    "type": "Minivan",
    "manufacturer": "Honda",
    "description": "From road trips to in-town grocery runs, the 2022 Honda Odyssey is an ideal companion for any family and that's why we put it on our Editors' Choice list. Its cabin is spacious and offers plenty of flexibility, whether you need it to haul a soccer team or a load of home improvement supplies. For times when long-haul driving is on the menu, its smooth and efficient V-6 engine is unobtrusive when cruising and powerful enough for passing. Technological features are plentiful and all models come with a host of driver-assistance features aimed at putting another layer of safety between the Odyssey's precious cargo and whatever mayhem might be brewing in a nearby lane. These are solid traits for any family vehicle, but the Odyssey isn't alone in offering them—rivals such as the Chrysler Pacifica and the Toyota Sienna are nipping at its heels and deserve a look.",
    "imgsrc": "../../assets/cars-img/Minivan/honda oddyssey.jpg",
    "price": "$34,265"
}, {
    "model": "2022 Chrysler Pacifica",
    "type": "Minivan",
    "manufacturer": "Chrysler",
    "description": "Practical, comfortable, graceful, and undeniably handsome, the 2022 Chrysler Pacifica has family transportation down pat. It's offered with either a regular V-6 or a plug-in hybrid powertrain, and can be equipped with optional all-wheel drive. Cargo capacity is vast, especially with the second and third rows folded flat into their built-in alcoves in the Pacifica's floor.",
    "imgsrc": "../../assets/cars-img/Minivan/chrysler pacifica.jpg",
    "price": "$38,690"
}]


  get(){
    return this.cars;
  }

  selectCar(selected:string){
    for (const car of this.cars) {
      if (car.model == selected){
        return car;
      };
    }

}


}

