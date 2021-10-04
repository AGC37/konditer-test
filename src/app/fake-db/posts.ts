export interface Post {
  id: number;
  title: string;
  h1: string;
  slug: string;
  author: string;
  content:string;
  created_at: any;
  photo: string;
  category: number;
  tags: number;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Как сделать торт с нуля таким же вкусным, как ваша любимая выпечка',
    h1: 'Как сделать торт с нуля таким же вкусным, как ваша любимая выпечка',
    slug: 'kak-sdelat-tort-s-nulja',
    author: 'Карла Уолш',
    content: '<p>Свежеиспеченный торт, покрытый глазурью, станет неотразимым домашним десертом. Запуганный? Начните здесь. Если вам нужен праздничный торт для кого-то особенного или необычный праздничный торт, мы научим вас каждый раз печь влажный и аппетитный торт. Мы даже покажем вам, как заморозить торт, чтобы он выглядел идеально.</p>\n' +
      '\n' +
      '<p>Каждый продукт, который мы представляем, был независимо выбран и проверен нашей редакционной группой. Если вы совершите покупку по включенным ссылкам, мы можем получать комиссию.</p>\n' +
      '\n' +
      '<p>Легкие, пушистые, покрытые глазурью. Будь то <a href="https://www.bhg.com/recipe/layer-cakes/classic-vanilla-cake/">классический ванильный торт</a> или десерт для <a href="https://www.bhg.com/recipe/chocolate/chocolate-lovers-cake/">любителей шоколада</a> , восхитительно влажный торт станет центральным элементом любого особого случая. Многие из наших <a href="https://www.bhg.com/recipes/desserts/cakes/classic-cakes/">лучших рецептов торта</a> начинаются с одного и того же метода: взбивания сливочного масла или шортенинга с сахаром до образования пышной массы. Эти торты иногда называют тортами со сливками, потому что жир и сахар взбиваются вместе. Используя проверенные методы нашей Test Kitchen, мы научим вас приготовить домашний торт, который будет настолько хорош, что все подумают, что вы купили его в модной пекарне. Хотя на это уходит немного времени, ни один из шагов по приготовлению торта не является очень сложным, как вы скоро узнаете.</p>\n' +
      '\n' +
      '<p><a href="https://www.bhg.com/recipes/how-to/bake/how-to-make-a-moist-cake/attachment/r030130/"><img alt="Ганаш из соленого шоколада с желтым пирогом" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F06%2F04%2FR030130.jpg&amp;q=85" /></a></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: ДЖЕЙСОН ДОННЕЛЛИ.</p>\n' +
      '\n' +
      '<h2>Как испечь торт</h2>\n' +
      '\n' +
      '<p>Прежде чем мы перейдем к этапам изготовления торта, вам нужно выбрать рецепт. Вы можете сделать это просто с <a href="https://www.bhg.com/recipe/layer-cakes/yellow-cake-with-chocolate-butter-frosting/">желтым пирогом</a> (на фото выше) или выбрать немного более эффектный рецепт, например, <a href="https://www.bhg.com/recipe/cakes/devils-food-cake/">шоколадный торт с дьявольской едой</a> или <a href="https://www.bhg.com/recipe/frosting/red-velvet-cake/">рецепт </a><a href="https://www.bhg.com/recipe/cakes/devils-food-cake/">торта </a><a href="https://www.bhg.com/recipe/frosting/red-velvet-cake/">с ярким красным бархатом</a> . Если вы не поклонник традиционной глазури, <a href="https://www.bhg.com/recipe/chocolate-cakes/german-chocolate-cake/">попробуйте немецкий шоколадный торт</a> . У нас также есть <a href="https://www.bhg.com/recipes/desserts/cakes/birthday/birthday-cake-recipes/">несколько рецептов</a> праздничных <a href="https://www.bhg.com/recipes/desserts/cakes/birthday/birthday-cake-recipes/">тортов</a> для праздничных случаев. Возможности практически безграничны, и эти инструкции помогут вам приготовить их все, кроме <a href="https://www.bhg.com/recipes/desserts/cakes/angel-food/angel-food-cake-tips/">ангельской еды</a> , <a href="https://www.bhg.com/recipes/desserts/cakes/pound/">бисквитных тортов</a> , <a href="https://www.bhg.com/recipes/how-to/bake/how-to-make-sponge-cake/">бисквитных</a> и <a href="https://www.bhg.com/recipes/how-to/bake/how-to-make-chiffon-cake/">шифоновых тортов.</a> требуются разные методы, поэтому читайте их отдельно, если вы готовите один из таких тортов.</p>\n' +
      '\n' +
      '<p>&nbsp;</p>\n' +
      '\n' +
      '<h3>Шаг 1: приготовьте противни</h3>\n' +
      '\n' +
      '<p>Никто не хочет, чтобы торт прилипал к сковороде, поэтому очень важно подготовить сковороды, прежде чем заливать тесто. За исключением еды ангела и шифоновых тортов, в большинстве рецептов <a href="https://www.bhg.com/recipes/how-to/bake/how-to-prepare-a-baking-pan/">требуется смазывать и растирать сковороду</a> или <a href="https://www.bhg.com/recipes/how-to/bake/how-to-prepare-a-baking-pan/">выстилать </a><a href="https://www.bhg.com/recipes/desserts/cookies/pan-lining-tip/">сковороду</a> вощеной или пергаментной бумагой.</p>\n' +
      '\n' +
      '<p>Что касается того, какой <a href="https://www.bhg.com/recipes/how-to/cooking-basics/when-to-use-glass-or-metal-pans/">тип формы для выпечки</a> использовать, наша тестовая кухня предпочитает блестящие формы для достижения золотистого цвета. Если вы используете темную сковороду или сковороду с тусклым покрытием, уменьшите температуру духовки на 25 &deg; F и проверьте степень готовности на 3-5 минут раньше, чтобы не перегореть.</p>\n' +
      '\n' +
      '<h3>Шаг 2: дайте ингредиентам нагреться до комнатной температуры</h3>\n' +
      '\n' +
      '<p>Многие рецепты требуют, чтобы ингредиенты для торта, такие как яйца и масло, стояли при комнатной температуре. Это позволяет маслу легко смешиваться с другими ингредиентами, и из яиц получается более объемный торт. (Из соображений безопасности пищевых продуктов не оставляйте яйца при комнатной температуре дольше, чем указано в рецепте.)</p>\n' +
      '\n' +
      '<p>&nbsp;</p>\n' +
      '\n' +
      '<p><strong>Совет:</strong> никогда не используйте топленое масло, если требуется размягченное масло. Это испортит текстуру торта.</p>\n' +
      '\n' +
      '<h3>Шаг 3: разогрейте духовку</h3>\n' +
      '\n' +
      '<p>Когда пирог печется слишком быстро, он может образовывать туннели и трещины, слишком медленно и может стать грубым. Дайте духовке разогреться не менее 10 минут и используйте <a href="https://goto.target.com/c/249354/81938/2092?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.target.com%2Fp%2Ftaylor-ambient-oven-grill-temperature-thermometer%2F-%2FA-11010614" target="_blank">термометр</a> для <a href="https://goto.target.com/c/249354/81938/2092?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.target.com%2Fp%2Ftaylor-ambient-oven-grill-temperature-thermometer%2F-%2FA-11010614" target="_blank">духовки</a> (7 долларов США, <a href="https://goto.target.com/c/249354/81938/2092?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.target.com%2Fp%2Ftaylor-ambient-oven-grill-temperature-thermometer%2F-%2FA-11010614" target="_blank">Target</a> ), чтобы убедиться, что она достигает нужной температуры. Если вы используете темные формы для выпечки, вам нужно снизить температуру духовки, указанную в вашем рецепте, на 25 &deg; F.</p>\n' +
      '\n' +
      '<h3>Шаг 4: перемешайте сухие ингредиенты</h3>\n' +
      '\n' +
      '<p>Сухие ингредиенты обычно включают муку, разрыхлитель и / или пищевую соду и соль. Вместо того , чтобы добавлять каждый <a href="https://www.bhg.com/recipes/how-to/bake/how-to-measure-baking-ingredients/">сухой ингредиент</a> по отдельности в тесто, <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FOneida-Stainless-Steel-Balloon-Whisk%2F834732388" target="_blank">венчик</a> ($ 6, <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FOneida-Stainless-Steel-Balloon-Whisk%2F834732388" target="_blank">Walmart</a> ) их вместе в миску заранее. Таким образом, вы будете знать, что ингредиенты равномерно распределены в тесте.</p>\n' +
      '\n' +
      '<p><img alt="человек бьет масло для торта" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F11%2F04%2Fperson-beating-butter-cake-315faa9a.jpg&amp;q=85" /></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: КРИЦАДА ПАНИЧГУЛЬ.</p>\n' +
      '\n' +
      '<h3>Шаг 5: смешайте масло и сахар</h3>\n' +
      '\n' +
      '<p>Не знаете, как приготовить торт из <a href="https://www.bhg.com/recipes/how-to/bake/how-to-make-cakes-soft-and-springy/">легкой воздушной крошки</a> ? Взбивание сливочного масла и сахара - самый важный шаг. Вот как:</p>\n' +
      '\n' +
      '<ul>\n' +
      '\t<li>Используя <a href="https://goto.target.com/c/249354/81938/2092?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.target.com%2Fp%2Fhamilton-beach-6-speed-hand-mixer-with-case-white-62632r%2F-%2FA-14297451" target="_blank">электрический миксер</a> ($ 23, <a href="https://goto.target.com/c/249354/81938/2092?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.target.com%2Fp%2Fhamilton-beach-6-speed-hand-mixer-with-case-white-62632r%2F-%2FA-14297451" target="_blank">Target</a> ) на средней или высокой скорости, взбивайте масло в течение 30 секунд. Обычно стационарный миксер требует средней скорости для этого шага, а ручной миксер требует более высокой скорости.</li>\n' +
      '\t<li>Добавьте сахар (и ваниль, если этого требует рецепт) и взбивайте смесь на средней скорости, пока она не станет однородной и не станет легкой и пушистой. Это займет от 3 до 5 минут. (НЕ сокращайте это коротко). Время от времени очищайте миску во время взбивания. При смешивании масла и сахара образуются крошечные пузырьки, которые придадут вашему торту мечтательную, легкую и пушистую текстуру.</li>\n' +
      '</ul>\n' +
      '\n' +
      '<h3>Шаг 6: добавляйте яйца по одному</h3>\n' +
      '\n' +
      '<p>Добавляйте яйца (или <a href="https://www.bhg.com/recipes/how-to/bake/how-to-beat-egg-whites-to-stiff-peaks/">яичные белки</a> ) по одному, хорошо взбивая после каждого раза. Их белок создает структуру вокруг пузырьков воздуха для сохранения текстуры.</p>\n' +
      '\n' +
      '<p><strong>Совет:</strong> сначала разбейте яйца по отдельности в чашку для заварного крема или небольшую миску. Таким образом, если вы получите фрагменты ракушки, вы сможете легко выловить их из чашки, а не пытаться достать их из жидкого теста.</p>\n' +
      '\n' +
      '<h3>Шаг 7. Поочередное добавление сухих и влажных ингредиентов.</h3>\n' +
      '\n' +
      '<p>Поочередно добавляйте часть мучной смеси и немного молока (или другой жидкости, указанной в рецепте) к смеси масло-яйцо-сахар, взбивая на низкой скорости после каждого добавления, пока не смешаете. Начинайте и заканчивайте мучной смесью. Это связано с тем, что при добавлении жидкости <a href="https://www.bhg.com/recipes/how-to/bake/flours-and-grains/">в муку</a> начинает образовываться глютен. Слишком много глютена делает торт жестким, поэтому обязательно начинайте и заканчивайте с мукой, а не перемешивайте слишком много, когда добавляете жидкость.</p>\n' +
      '\n' +
      '<p><strong>Совет</strong> по приготовлению <strong>теста:</strong> будьте осторожны, не перемешайте слишком много на этом этапе, иначе в готовом кексе могут образоваться удлиненные отверстия неправильной формы.</p>\n' +
      '\n' +
      '<p><img alt="человек намазывает тесто для торта" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F11%2F04%2Fperson-spreading-cake-batter-4a3928ba.jpg&amp;q=85" /></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: КРИЦАДА ПАНИЧГУЛЬ.</p>\n' +
      '\n' +
      '<h3>Шаг 8: налейте тесто в сковороды и запекайте</h3>\n' +
      '\n' +
      '<p>Равномерно распределите тесто между противнями. Используйте <a href="https://www.anrdoezrs.net/links/9029446/type/dlg/sid/BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I/https://www.bedbathandbeyond.com/store/product/ateco-stainless-steel-offset-icing-spatula-in-brown/3270346" target="_blank">смещенный шпатель</a> ($ 9, <a href="https://www.anrdoezrs.net/links/9029446/type/dlg/sid/BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I/https://www.bedbathandbeyond.com/store/product/ateco-stainless-steel-offset-icing-spatula-in-brown/3270346" target="_blank">Bed Bath &amp; Beyond</a> ), чтобы распределить тесто ровным слоем. Обязательно разложите его до края сковороды. Выпеките торт согласно рецепту.</p>\n' +
      '\n' +
      '<p><strong>По теме: </strong><a href="https://www.bhg.com/recipes/how-to/bake/essential-baking-tools/" target="_blank">21 необходимый инструмент для выпечки, который нужен каждому домашнему повару</a></p>\n' +
      '\n' +
      '<h3>Шаг 9: проверьте готовность торта</h3>\n' +
      '\n' +
      '<p>Запеченный пирог - это сухой пирог, и никто этого не хочет. Начните проверять готовность торта после минимального времени выпекания, указанного в рецепте, не открывая дверцу духовки, пока не придет время, чтобы не допустить выхода тепла. Для пирожных со сливками вставьте <a href="https://www.bhg.com/recipes/how-to/bake/toothpick-test-alternatives/">деревянную зубочистку</a> рядом с центром торта. Если кирка выходит чистой (с одной или двумя крошками), торт готов. Если на нем есть влажное тесто, выпекайте торт еще несколько минут и попробуйте на новом месте с новой зубочисткой.</p>\n' +
      '\n' +
      '<p><a href="https://www.bhg.com/recipes/how-to/bake/essential-baking-tools/attachment/wire-rack/"><img alt="Пекарь кладет торт из формы для выпечки на решетку" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2018%2F11%2F16024442%2Fwire-rack-101128719.jpg&amp;q=85" /></a></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: КРИЦАДА ПАНИЧГУЛЬ.</p>\n' +
      '\n' +
      '<h3>Шаг 10: охладите торт</h3>\n' +
      '\n' +
      '<p>Дайте пирогам остыть в формах на <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FLast-Confection-Stainless-Steel-Baking-Cooling-Rack-12-x-17-Fits-Half-Sheet-Pan-Cookie-Baker-s-Oven-Wire-Rack%2F827207276" target="_blank">решетке</a> (15 долларов, <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FLast-Confection-Stainless-Steel-Baking-Cooling-Rack-12-x-17-Fits-Half-Sheet-Pan-Cookie-Baker-s-Oven-Wire-Rack%2F827207276" target="_blank">Walmart</a> ) максимум 10 минут. Чтобы вынуть его из формы, проведите ножом по краям торта, чтобы ослабить его с боков. Поместите решетку поверх торта и переверните форму. Снимите форму с торта, стараясь не порвать края торта. Если вы использовали <a href="https://www.bhg.com/recipes/how-to/cooking-basics/parchment-paper-vs-wax-paper/">вощеную или пергаментную бумагу</a> , аккуратно снимите ее с торта.</p>\n' +
      '\n' +
      '<p>Дать пирогу полностью остыть (около 1 часа). Это ключевой шаг к тому, чтобы пирог затвердел, чтобы он не распался, когда вы его заморозите. (И это предотвращает таяние глазури, как только вы ее намазываете!)</p>\n' +
      '\n' +
      '<p><img alt="человек глазирует торт и укладывает слои" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F11%2F04%2Fperson-frosting-cake-placing-layers-d1e1d7e1-d4bd4987.jpg&amp;q=85" /></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: БЛЕЙН МОУТС.</p>\n' +
      '\n' +
      '<p><a href="https://www.bhg.com/recipe/frosting/butter-cream-frosting/">ПОЛУЧИТЕ НАШ РЕЦЕПТ КРЕМОВОЙ ГЛАЗУРИ</a></p>\n' +
      '\n' +
      '<h3>Шаг 11: соберите торт</h3>\n' +
      '\n' +
      '<p>Чтобы избежать крошек в глазури, смажьте коржи <a href="https://williams-sonoma.pdy5.net/c/249354/265127/4291?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.williams-sonoma.com%2Fproducts%2Fwilliams-sonoma-pastry-brush%2F" target="_blank">кондитерской кистью</a> (10 долларов, <a href="https://williams-sonoma.pdy5.net/c/249354/265127/4291?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.williams-sonoma.com%2Fproducts%2Fwilliams-sonoma-pastry-brush%2F" target="_blank">Williams Sonoma</a> ) перед сборкой. Нанесите примерно &frac12; стакана глазури на первый слой, затем аккуратно залейте следующим слоем. Повторяйте, пока все слои не будут уложены.</p>\n' +
      '\n' +
      '<p><strong>Совет:</strong> требуется от <a href="https://www.bhg.com/recipes/how-to/bake/cups-frosting-for-layer-cake/">2&frac12; до 3 стаканов глазури,</a> чтобы обильно заполнить и заморозить двухслойный 9-дюймовый торт. Для трехслойного торта приготовьте от 3 &frac12; до 4 стаканов.</p>\n' +
      '\n' +
      '<h3>Шаг 12: нанесите первый слой глазури</h3>\n' +
      '\n' +
      '<p>Секрет умения заморозить слоеный пирог - это покрытие из крошки. Для этого нанесите очень тонкий слой глазури по бокам и сверху торта. Этот начальный слой не обязательно должен выглядеть идеально; это еще один способ уберечь крошки от глазури. Дайте пирогу постоять 30 минут, чтобы глазурь застыла.</p>\n' +
      '\n' +
      '<p><strong>Совет:</strong> для быстрой очистки заправьте небольшие кусочки вощеной бумаги вокруг и под первым слоем торта на <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FRevolving-Cake-Stand-for-Birthday-Party-Serve-in-Style-10-6-x-11-x-2-9-inch-Turntable-Cake-Stand%2F559442892" target="_blank">пьедестале</a> (13 долларов, <a href="https://goto.walmart.com/c/249354/565706/9383?subId1=BHGHowtoMakeaCakefromScratchasDeliciousasYourFavoriteBakerykwalshHowPos31147201605I&amp;u=https%3A%2F%2Fwww.walmart.com%2Fip%2FRevolving-Cake-Stand-for-Birthday-Party-Serve-in-Style-10-6-x-11-x-2-9-inch-Turntable-Cake-Stand%2F559442892" target="_blank">Walmart</a> ) или тарелке для торта.</p>\n' +
      '\n' +
      '<p><a href="http://bhg.onecms.io/frosting-cake-white-frosting-01eab6d5/" target="_blank"><img alt="Frosting a cake with white frosting" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F06%2F04%2Ffrosting-cake-white-frosting-01eab6d5.jpg&amp;q=85" /></a></p>\n' +
      '\n' +
      '<p>ПРЕДОСТАВЛЕНО: БЛЕЙН МОУТС.</p>\n' +
      '\n' +
      '<h3>Шаг 15: заморозить и украсить</h3>\n' +
      '\n' +
      '<p>Используя офсетную лопатку или столовый нож, обильно распределите оставшуюся глазурь по верхней и боковым сторонам торта, вращая по ходу движения. Как только торт будет полностью покрыт, вернитесь и добавьте больше завитков по желанию. Подавайте торт в течение 2 часов или храните в холодильнике.</p>\n' +
      '\n' +
      '<p>Теперь, когда вы знаете, как приготовить торт с нуля, продолжайте практиковать свои <a href="https://www.bhg.com/recipes/how-to/bake/how-to-decorate-a-cake/">навыки украшения тортов</a> дома с помощью <a href="https://www.bhg.com/recipes/how-to/bake/how-to-color-icing/">разноцветной глазури</a> , техники окантовки и начинки. Вот несколько <a href="https://www.bhg.com/recipes/desserts/cakes/elegant-easy-cakes/">простых и элегантных рецептов тортов,</a> которые вдохновят вас на следующую выпечку, чтобы получить больше идей для тортов .</p>',
    created_at: '01.09.2021',
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F06%2F04%2FR030130.jpg&amp;q=85',
    category: 1,
    tags: 1,
  },
  {
    id: 2,
    title: 'КЛАССИЧЕСКИЙ КЕКС В ДУХОВКЕ',
    h1: 'КЛАССИЧЕСКИЙ КЕКС В ДУХОВКЕ',
    slug: 'klassicheskii-keks',
    author: 'Кармолита Уолш',
    content: '<h2>ПОШАГОВОЕ ПРИГОТОВЛЕНИЕ</h2>\n' +
      '\n' +
      '<ol>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 1:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_1_max.jpg"><img alt="Шаг 1." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_1_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Подготовьте все необходимые ингредиенты. Заранее достаньте яйца и сливочное масло из холодильника, чтобы они успели нагреться до комнатной температуры. Масло должно полностью размягчиться.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 2:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_2_max.jpg"><img alt="Шаг 2." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_2_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Мягкое масло переложите в емкость. Всыпьте сахар или сахарозаменитель, который не боится термической обработки. Ванильный сахар можно заменить ванилином (примерно на кончике ножа) или ванильной эссенцией. Важно быть внимательными с дозировкой! Чтобы не испортить вкус выпечки, обязательно читайте инструкцию сколько и как добавлять! Взбейте массу миксером или венчиком до пышного кремообразного состояния. Важно, чтобы кристаллы сахара полностью растворились.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 3:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_3_max.jpg"><img alt="Шаг 3." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_3_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Не прекращая взбивание, по одному добавляйте яйца. Каждый раз тщательно размешивая масляную смесь до однородности.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 4:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_4_max.jpg"><img alt="Шаг 4." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_4_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Добавьте изюм. Его следует предварительно промыть под проточной водой и обязательно пропарить. Не игнорируйте этот шаг, иначе он плохо пропечется и осядет на дно кекса. Как правильно распарить изюм? Залейте его горячей водой и оставьте на 10-15 минут. За это время он станет мягким. Слейте воду и обсушите сухофрукты бумажными полотенцами. Добавьте в масляную смесь и тщательно размешайте, распределяя его по всему тесту.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 5:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_5_max.jpg"><img alt="Шаг 5." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_5_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Разрыхлитель смешайте с небольшим количеством муки и добавьте в массу. Так он лучше распределится по тесту. Заменить его можно содой (1 ч. л) погашенной 9% уксусом (1 ст. л). Обязательно просейте муку, чтобы насытить ее кислородом и выпечка получилась пышной. Количество муки может понадобится больше или меньше, чем указано. Потому добавляйте ее порциями, добиваясь нужной консистенции. Готовое тесто должно быть похожим на очень густую домашнюю сметану.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 6:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_6_max.jpg"><img alt="Шаг 6." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_6_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Форму выстелите пергаментом, чтобы кекс не пригорел. Выложите тесто. Разровняйте поверхность. Смочите лопатку в холодной воде и в нескольких местах прорежьте кекс насквозь, чтобы он хорошо пропекся. Включите (за 10-15 мин.) на разогрев духовку на 160 градусов. Выпекайте кекс около 60-80 минут до румяности. Время и температура указаны приблизительно. Учитывайте особенности своей духовки.</p>\n' +
      '\t</li>\n' +
      '\t<li>\n' +
      '\t<p>ШАГ 7:</p>\n' +
      '\t<a href="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_7_max.jpg"><img alt="Шаг 7." src="https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_7_min.jpg" /></a>\n' +
      '\n' +
      '\t<p>Проверьте готовность кекса, проткнув его деревянной шпажкой. Если она вышла сухой, вынимайте выпечку из духовки. Когда выпечка полностью остынет, осторожно освободите ее из формы и переложите на плоское блюдо. Не забудьте снять с кекса пекарскую бумагу. Щедро посыпьте его сверху сахарной пудрой через мелкое ситечко. Приятного чаепития!</p>\n' +
      '\t</li>\n' +
      '</ol>\n' +
      '\n' +
      '<p>Кекс получился идеальным! Все в нем в меру. Вкусный, пушистый, ароматный, нежный и не приторный. На следующий день он станет еще вкуснее.</p>\n' +
      '\n' +
      '<p>Для более яркого аромата добавьте в тесто цедру апельсина или лимона. Готовый кекс можно покрыть шоколадной глазурью, смазать сгущенным молоком, кисленьким вареньем, посыпать кондитерской присыпкой.</p>\n' +
      '\n' +
      '<p>Будьте готовы к тому, что муки может потребоваться чуть больше или, наоборот, меньше, чем указано в рецепте. Ориентироваться нужно на то, каким тесто должно получиться (плотным, мягким, жидким и т. д.). Много полезной информации о том, почему мука даже одного и того же сорта может иметь совершенно разные свойства,&nbsp;<a href="https://1000.menu/table/44307-pshenichnaya-muka-sekrety-i-nuansy-ispolzovaniya">читайте в этой статье</a></p>\n' +
      '\n' +
      '<p>Учитывайте, что духовки у всех разные. Температура и время приготовления могут отличаться от указанных в рецепте.&nbsp; Чтобы любое запеченное блюдо получилось успешным, воспользуйтесь полезной информацией&nbsp;<a href="https://1000.menu/table/43017-kak-gotovit-v-duxovke-vkusno-po-nepravilnym-receptam">в статье о духовках здесь</a></p>\n',
    created_at: '01.09.2021',
    photo: 'https://static.1000.menu/img/content/28936/klassicheskii-keks_1538234842_8_max.jpg',
    category: 1,
    tags: 1,
  },
]
