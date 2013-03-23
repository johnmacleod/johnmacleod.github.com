// JavaScript Document
//	var homeP = 'Vintage Airplane Tshirts

	var photosP = 'Vintage Airplane Tshirts | Photos'
	var aboutP =  'Vintage Airplane Tshirts | About'
	var linksP =  'Vintage Airplane Tshirts | Links'
	var viewCartP =  'Vintage Airplane Tshirts | View Cart'

	
	//var linksP =  'Vintage Airplane Tshirts : Links'
	//var view_cart =  'Vintage Airplane Tshirts : View Cart'
/*	
	if ( (document.title) == photos ) {
		$('.upper_nav > ul > li').eq(0).css('background-color', '#470606');
		$('.upper_nav > ul > li').eq(0).css('border-right-width','2px');	
		$('.upper_nav > ul > li').eq(0).css('border-right-style','solid');			
		$('.upper_nav > ul > li').eq(0).css('border-right-color','#933939');
		$('.upper_nav > ul > li').eq(0).css('border-left-width','1px');	
		$('.upper_nav > ul > li').eq(0).css('border-left-style','colors');			
		$('.upper_nav > ul > li').eq(0).css('border-left-color','#930C0C');
	} else if ( (document.title) == aboutP ) {
		$('.upper_nav > ul > li').eq(1).css('background-color', '#470606');
		//alert("That ain't it!");
	}
	*/
	
	switch (document.title) {
		case photosP:
			$('.upper_nav > ul > li > a').eq(0).css('background-color', '#470606');
			$('.upper_nav > ul > li > a').eq(0).css('border-right-width','1px');	
			$('.upper_nav > ul > li > a').eq(0).css('border-right-style','solid');			
			$('.upper_nav > ul > li > a').eq(0).css('border-right-color','#933939');
			$('.upper_nav > ul > li > a').eq(0).css('border-left-width','1px');	
			$('.upper_nav > ul > li > a').eq(0).css('border-left-style','colors');			
			$('.upper_nav > ul > li > a').eq(0).css('border-left-color','#930C0C');
			break;
			
		case aboutP:
			$('.upper_nav > ul > li > a').eq(1).css('background-color', '#470606');
			$('.upper_nav > ul > li > a').eq(1).css('border-right-width','1px');	
			$('.upper_nav > ul > li > a').eq(1).css('border-right-style','solid');			
			$('.upper_nav > ul > li > a').eq(1).css('border-right-color','#933939');
			$('.upper_nav > ul > li > a').eq(1).css('border-left-width','1px');	
			$('.upper_nav > ul > li > a').eq(1).css('border-left-style','colors');			
			$('.upper_nav > ul > li > a').eq(1).css('border-left-color','#930C0C');
			break;
			
		case linksP:
			$('.upper_nav > ul > li > a').eq(2).css('background-color', '#470606');
			$('.upper_nav > ul > li > a').eq(2).css('border-right-width','1px');	
			$('.upper_nav > ul > li > a').eq(2).css('border-right-style','solid');			
			$('.upper_nav > ul > li > a').eq(2).css('border-right-color','#933939');
			$('.upper_nav > ul > li > a').eq(2).css('border-left-width','1px');	
			$('.upper_nav > ul > li > a').eq(2).css('border-left-style','colors');			
			$('.upper_nav > ul > li > a').eq(2).css('border-left-color','#930C0C');
			break;
			
		case viewCartP:
			$('.upper_nav > ul > li > a').eq(3).css('background-color', '#470606');
			$('.upper_nav > ul > li > a').eq(3).css('border-right-width','1px');	
			$('.upper_nav > ul > li > a').eq(3).css('border-right-style','solid');			
			$('.upper_nav > ul > li > a').eq(3).css('border-right-color','#933939');
			$('.upper_nav > ul > li > a').eq(3).css('border-left-width','1px');	
			$('.upper_nav > ul > li > a').eq(3).css('border-left-style','colors');			
			$('.upper_nav > ul > li > a').eq(3).css('border-left-color','#930C0C');
			break;						
			
		default:
		
	}
	
