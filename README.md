<div style="color: #c6d4df; background-color: #1b2838;">
<center>
<h1 style="color: #67c1f5; border-bottom: 2px solid #67c1f5;">Ultimate Steam Enhancer</h1>
</center>
<p><strong>Ultimate Steam Enhancer</strong> — это мощный пользовательский скрипт для платформы Steam, расширяющий стандартные возможности магазина и сообщества. Он объединяет в себе функционал множества инструментов, предоставляя пользователю расширенный контроль и доступ к дополнительной информации об играх, ценах, переводах, обзорах, активности друзей и многом другом.
</p>

[![Установить с Greasy Fork](https://img.shields.io/badge/Установить_с-GreasyFork-blue.svg)](https://greasyfork.org/ru/scripts/526180-ultimate-steam-enhancer)

<hr style="border: 1px solid #2a3f5a;">
<h2 style="color: #67c1f5;">Содержание</h2>
<ul>
<li><a href="#gamePage_features" style="color: #8f98a0;">Функции на странице игры</a></li>
<li><a href="#catalog_features" style="color: #8f98a0;">Улучшения каталога Steam</a></li>
<li><a href="#community_features" style="color: #8f98a0;">Сообщество и активность</a></li>
<li><a href="#market_features" style="color: #8f98a0;">Торговая площадка</a></li>
<li><a href="#news_wishlist_features" style="color: #8f98a0;">Новости и список желаемого</a></li>
<li><a href="#main_settings" style="color: #8f98a0;">Настройки</a></li>
</ul>
<hr style="border: 1px solid #2a3f5a;">
<div id="gamePage_features">
<h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;">
<center>Функции на странице игры</center>
</h2>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Индикаторы / Доп. обзоры / Монитор обзоров</summary><div style="border-top: 1px solid #2a3f5a;">
<p><strong>Что делает:</strong></p>
<ol>
<li>Отображает значки-индикаторы наличия русского языка (интерфейс, озвучка, субтитры) прямо на странице игры.</li>
<br>
<li>Добавляет под стандартными обзорами блок с расширенной статистикой<br>(загружается по щелчку или автоматически, если включена опция):
<ul>
<li><strong>Тотальные:</strong> Все обзоры Steam (включая активации ключами).</li>
<li><strong>Безкитайские:</strong> Обзоры за исключением написанных на китайском языке.</li>
<li><strong>Русские:</strong> Только обзоры на русском языке.</li>
</ul>
</li>
<br>
<center><img src="https://i.imgur.com/fcdZh8b.png" alt="[Пример индикаторов и дополнительных обзоров на странице игры]" style="border: 1px solid #333;"></center>
<br>
<li>Модальные окна:
<ul>
<li>При щелчке по строке "Русские" открывается окно с актуальными <strong>русскоязычными обзорами</strong> для этой игры.</li>
<img src="https://i.imgur.com/MOEyAlM.png" alt="[Модальное окно с русскоязычными обзорами]" style="border: 1px solid #333;">
<br>
<li>При щелчке по строке "Тотальные" открывается окно <strong>"Глобальный монитор обзоров"</strong>. Этот инструмент позволяет собрать (по кнопке "Собрать") и визуализировать статистику обзоров по <strong>27 языкам</strong> Steam. Он показывает таблицу с рейтингом языков по количеству обзоров и доле в общей массе, а также интерактивную круговую диаграмму для наглядного представления.</li>
<img src="https://i.imgur.com/2azVyAW.png" alt="[Глобальный монитор обзоров с таблицей и диаграммой]" style="border: 1px solid #333;">
</ul>
</li>
</ol>
<div style="margin-top: 15px; margin-left: 15px; margin-right: 15px; margin-bottom: 10px; padding: 10px; background-color: rgba(255, 179, 0, 0.1); border: 1px solid rgba(255, 179, 0, 0.4); border-radius: 4px; font-size: 0.95em; line-height: 1.4;">
<p style="margin: 0 0 5px 0; font-weight: bold; color: #FFB300;">⚠️ Важное замечание о зависимостях:</p>
<p style="margin: 0; color: #c6d4df;">Отключение этого модуля приведет к автоматическому отключению или нарушению корректной работы модулей «Время прохождения (HLTB)», «Русификаторы (ZOG)» и «Время друзей / Глобальные достижения», так как они критически зависят от его функционала по отображению элементов на странице игры.</p>
</div>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Время прохождения (HLTB)</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет компактный блок с информацией о времени прохождения игры, полученной с популярного сайта HowLongToBeat.com.</p>
<p>Показывает среднее время для разных стилей:</p>
<ul>
<li>Только основной сюжет.</li>
<li>Сюжет + дополнительные задания.</li>
<li>Полное прохождение (100%).</li>
<li>Усредненное время для всех стилей.</li>
</ul>
<p>Рядом со временем указывается количество игроков, на чьих данных основана статистика.<br>Поиск игры в базе HLTB идет по названию, при неоднозначности предлагается выбор из похожих вариантов.</p>
<center><img src="https://i.imgur.com/6tgxA2s.png" alt="[Пример отображения времени прохождения с HowLongToBeat]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Русификаторы (ZOG)</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет блок с информацией о наличии русификаторов для игры на сайте ZoneOfGames.ru.</p>
<p>В блоке отображается:</p>
<ul>
<li>Название игры (ведет на страницу игры в базе ZOG).</li>
<li>Список доступных русификаторов. Каждая запись является ссылкой на соответствующий файл/страницу на ZOG.</li>
<li>Если переводы не найдены, выводится соответствующее сообщение.</li>
</ul>
<p>Поиск происходит в <strong>реальном времени</strong>. Скрипт автоматически определяет название игры, выполняет поиск по алфавитному указателю на ZoneOfGames.ru и предлагает вам выбрать наиболее точное совпадение.</p>
<center><img src="https://i.imgur.com/XgAVWAp.png" alt="[Пример отображения информации о русификаторах с ZOG]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Время друзей / Глобальные достижения</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Отображает блок с информацией о времени, которое ваши друзья провели в этой игре, а также о статистике глобальных достижений Steam.</p>
<p><strong>Время друзей:</strong></p>
<ul>
<li>Максимальное время прохождения (И ник друга со ссылкой).</li>
<li>Среднее время прохождения (и указание количества друзей, по которым высчитывалось среднее).</li>
<li>Минимальное время прохождения.</li>
</ul>
<p><strong>Глобальные достижения:</strong></p>
<ul>
<li>Процент "платины" (процент получивших самое редкое достижение).</li>
<li>Средний прогресс выполнения всех достижений.</li>
</ul>
<p>Данные загружаются при раскрытии блока.</p>
<center><img src="https://i.imgur.com/9TaMCbZ.png" alt="[Пример отображения времени друзей и статистики достижений]" style="border: 1px solid #333;"></center>
<p><strong>Модуль адаптирован для работы на страницах недоступных игр</strong>, открытых с помощью "виртуального режима инкогнито", и отображает на них информацию о друзьях, владеющих игрой.</p>
        <center><img src="https://i.imgur.com/6jbZ03L.png" alt="[Изображение: Пример]" style="max-width: 100%; height: auto; border-radius: 4px; border: 1px solid #333; margin-top: 10px; margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Индикатор раннего доступа</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Показывает небольшую плашку над изображением игры с информацией о статусе раннего доступа (Early Access).</p>
<ul>
<li><strong>Если игра еще в раннем доступе:</strong> Отображается, сколько времени игра уже находится в нем<br>(например, "В раннем доступе уже 1 год и 3 месяца").</li>
<img src="https://i.imgur.com/6iGlcTf.png" alt="[Пример индикатора для игры в активном раннем доступе]" style="border: 1px solid #333;">
<br>
<li><strong>Если игра вышла из раннего доступа:</strong> Отображается, сколько времени игра провела в нем до релиза<br>(например, "Вышла спустя 2 года раннего доступа").</li>
<img src="https://i.imgur.com/SPzJrpi.png" alt="[Пример индикатора для игры, вышедшей из раннего доступа]" style="border: 1px solid #333;">
</ul>
<p>Расчет времени динамический. Использует даты со страницы Steam.<br>А также может подтягивать дату старта раннего доступа из собственной базы для вышедших игр, если Steam ее не показывает.</p>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Анализатор цен</summary><div style="border-top: 1px solid #2a3f5a;">
<p><strong>Что делает:</strong><br>Добавляет кнопку "Анализатор цен" на страницу игры. Этот инструмент позволяет анализировать региональные цены двумя способами:<br>в рублях (по умолчанию) и в долларах США (переключаемый режим).</p>
<p>После нажатия кнопки "Сбор данных" в специальном окне, модуль выполняет следующее в зависимости от выбранного режима:</p>
<div style="margin-top: 10px; margin-bottom: 10px;">
<h4 style="color: #67c1f5; margin-bottom: 5px; margin-top:0;">Режим Рублей (по умолчанию):</h4>
<ul>
<li>Определяет AppID текущей игры и запрашивает цены через официальное API Steam (<code>IStoreBrowseService/GetItems</code>) для множества регионов.</li>
<li>В качестве базы для расчета <strong>рекомендованной рублевой цены</strong> используется цена в США (USD).</li>
<li>Цены из всех регионов, включая Россию, <strong>конвертируются в рубли</strong> по актуальным обменным курсам для прямого сопоставления.</li>
<li>Производится ключевое сравнение: фактическая цена в российском Steam сопоставляется с <strong>официально рекомендованной Valve ценой для России</strong>. Отклонения подсвечиваются.</li>
<li>Отображается <strong>рейтинг российской цены</strong> среди всех проанализированных стран, позволяя увидеть её место от самой дешёвой к самой дорогой в рублевом эквиваленте.</li>
</ul>
</div>
<div style="margin-bottom: 10px;">
<h4 style="color: #67c1f5; margin-bottom: 5px; margin-top:0;">Режим Долларов США (переключаемый):</h4>
<ul>
<li>Активируется кнопкой "USD" в окне анализатора. Интерфейс и названия валют <strong>переключаются на английский язык</strong>.</li>
<li>Цены всех регионов также запрашиваются через API Steam и <strong>конвертируются в доллары США</strong>.</li>
<li>Цена в США используется как <strong>базовый ориентир (100%)</strong> для сравнения с ценами других регионов.</li>
<li>Отображается <strong>процентное отклонение</strong> цен других регионов от цены в США.</li>
<li>Представляется общий рейтинг всех региональных цен в долларовом эквиваленте.</li>
<li>Этот режим полезен для оценки ценовой политики при общении с разработчиками/издателями.</li>
</ul>
</div>
<p><i>Примечание: Если игра в США бесплатна или цена для нее не найдена, возможности анализа в обоих режимах могут быть ограничены. Вся собранная информация представляется в модальном окне.</i></p>
<div style="background-color: rgba(103, 193, 245, 0.1); border: 1px solid rgba(103, 193, 245, 0.35); padding: 10px; margin-top:15px; border-radius: 4px;">
<p style="color: #67c1f5; font-weight: bold; margin-top:0; margin-bottom:5px;">⚠️ Важная информация:</p>
<p style="color: #c6d4df; margin-bottom:0; margin-top:0;">Каждый полный сбор данных подразумевает отправку <strong>~41 запроса</strong> к серверам Steam (точное количество зависит от числа доступных регионов). Пожалуйста, используйте эту функцию обдуманно. Частое нажатие кнопки на разных играх в течение короткого периода времени может привести к временному ограничению доступа к API Steam (обычно на 5-15 минут).</p>
</div><br>
<center><img src="https://i.imgur.com/OzebvaA.png" alt="[Пример работы анализатора региональных цен]" style="border: 1px solid #333; max-width: 100%; height: auto;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Поиск цен на Plati.Market</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет кнопку "Plati" рядом с кнопкой "В желаемое" на странице игры.<br>Нажатие открывает полноэкранное окно для поиска предложений по этой игре на торговой площадке Plati.Market.</p>
<p><strong>Возможности окна поиска:</strong></p>
<ul>
<li>Автозаполнение поиска названием текущей игры.</li>
<li>Ручной ввод и поиск.</li>
<li>Подсказки при вводе (API Plati).</li>
<li>Сортировка по цене, продажам, релевантности, названию, дате, рейтингу продавца и др.</li>
<li>Фильтрация по цене (RUR, USD, EUR, UAH), продажам, рейтингу, наличию плохих отзывов/возвратов, участию в скидках, дате добавления.</li>
<li>Исключение товаров по ключевым словам (панель справа).</li>
<li>Сохранение фильтров, сортировки, валюты и исключений.</li>
</ul>
<p>Используются официальные API Plati.Market.</p>
<center><img src="https://i.imgur.com/j1TGmY8.png" alt="[Модальное окно поиска цен на Plati.Market]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Агрегатор цен (%)</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет кнопку "%" рядом с кнопкой "В желаемое" на странице игры.<br>Нажатие открывает модальное окно с ценами на эту игру из различных цифровых магазинов.</p>
<p><strong>Возможности окна агрегатора:</strong></p>
<ul>
<li>Отображение предложений из магазинов: SteamBuy, Playo, SteamPay, Gabestore, GamersBase, Igromagaz, GamesForFarm, Gamazavr, GameRay, KupiKod, KeysForGamers, Zaka-zaka, Buka, GGSEL, Plati.Market и текущей страницы Steam.</li>
<li>Конвертация валют: Возможность переключения отображения всех цен между рублями (RUB) и долларами США (USD).</li>
<li>Сортировка по цене, проценту скидки, сумме скидки, названию.</li>
<li>Фильтрация по диапазону цен, проценту и сумме скидки, наличию скидки, названию (слова через ";"), магазинам.</li>
<li>Исключение товаров по ключевым словам.</li>
<li>Сохранение состояния фильтров, сортировки и исключений.</li>
<li>Экспорт и импорт списка исключений для удобного переноса и резервного копирования.</li>
</ul>
<details style="background-color: #111a24; border: 1px solid #2a3f5a; margin-top: 15px; margin-bottom: 15px; padding: 5px 10px; border-radius: 3px;"><summary style="color: #8f98a0; cursor: pointer;">Список рекомендуемых исключений</summary>
<div style="border-top: 1px solid #2a3f5a; margin-top: 8px; padding-top: 8px;">
<p style="margin-top: 0; color: #c6d4df;">Нажмите кнопку импорта (<strong>→</strong>) и вставьте в появившееся окно следующий текст:</p>
<pre style="background-color: #10151d; border: 1px solid #333; padding: 10px; border-radius: 4px; font-family: Consolas, 'Courier New', monospace; font-size: 0.9em; white-space: pre-wrap; word-break: break-all; color: #c6d4df;">онлайн,оффлайн,dlc,аккаунт,ps4,xbox,digi361,ibloodrue,mangarded,siparisapp,multimarket,trustytop,cyber steam shop,boostgame,cloud-gaming.store,promarket88,offline,-seyter-,paul fox,sirdjinn,аренда,4ilgames,keks12,damhubmarket,nt-store,ps5,@mediasoft,dofamine game,hactier,alz0n,top-games,solo29,nerd shop,1gamestore,tobeclosertoyou</pre>
</div>
</details>
<p>Использует различные методы для получения цен (API, парсинг HTML).</p>
<center><img src="https://i.imgur.com/DcidcTe.png" alt="[Пример интерфейса агрегатора цен]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Доступность подарков (страница игры)</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет кнопку "GIFT" в блок с кнопкой "В желаемое" на странице игры.</p>
<p>Нажатие открывает окно, где можно:</p>
<ul>
<li>Выбрать регион друга из списка.</li>
<li>Нажать "Узнать", чтобы запросить цену игры в этом регионе.</li>
<li>Увидеть цену друга (сконвертированную в вашу валюту), процент разницы и вердикт (<span style="color:#77dd77;">Можно подарить</span> / <span style="color:#ff6961;">Нельзя подарить</span>), основанный на правилах Steam о разнице цен (±10%).</li>
</ul>
<p>Использует те же механизмы получения цен и курсов валют, что и помощник для списка желаемого.</p>
<center><img src="https://i.imgur.com/jDdf4pR.png" alt="[Пример работы помощника подарков на странице игры]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Доступ к недоступным играм (Виртуальный режим инкогнито)</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Позволяет просматривать страницы игр, недоступных в вашем регионе (которые обычно показывают ошибку "Ой, извините..."), и использовать на них большинство функций расширения.</p>
<center><img src="https://i.imgur.com/TGmRkOP.png" alt="[Пример работы виртуального режима инкогнито]" style="border: 1px solid #333; max-width: 100%; height: auto;"></center>
<p><strong>Принцип работы:</strong></p>
<ul>
<li>При заходе на заблокированную страницу скрипт автоматически в фоновом режиме получает временную анонимную сессию от Steam.</li>
<li>Используя эту сессию, он запрашивает страницу игры для другого региона (США), но с русским языком.</li>
<li>Скрипт автоматически проходит проверку возраста, если она требуется.</li>
<li>Полученный "разблокированный" код страницы полностью заменяет собой содержимое текущей вкладки, позволяя вам видеть полноценную страницу игры, не покидая ее.</li>
<li>После этого все модули U.S.E. перезапускаются, чтобы корректно работать на новой странице.</li>
</ul>
<div style="background-color: rgba(103, 193, 245, 0.1); border: 1px solid rgba(103, 193, 245, 0.35); padding: 10px; margin-top:15px; border-radius: 4px;">
<p style="color: #67c1f5; font-weight: bold; margin-top:0; margin-bottom:5px;">⚠️ Легитимность и безопасность:</p>
<p style="color: #c6d4df; margin-bottom:0; margin-top:0;">Данный метод <strong>не нарушает правила Steam</strong>, так как не использует VPN/прокси, а лишь задействует встроенную функцию Steam для просмотра страниц под другим регионом (<code>?cc=us</code>) в изолированной сессии. Это предназначено <strong>только для просмотра</strong>, совершить покупку таким образом невозможно.</p>
</div><br>
<center><img src="https://i.imgur.com/PpjV7oc.png" alt="[Пример работы виртуального режима инкогнито]" style="border: 1px solid #333; max-width: 100%; height: auto;"></center>
</div>
</details>
</div>
<hr style="border: 1px solid #2a3f5a;">
<div id="catalog_features">
<h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;">
<center>Улучшения каталога Steam</center>
</h2>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Доп. инфо / Фильтры</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Расширяет функционал страницы поиска по каталогу Steam (<a href="https://store.steampowered.com/search/" target="_blank" style="color:#67c1f5;">store.steampowered.com/search/</a>).</p>
<p><strong>При наведении:</strong></p>
<ul>
<li>Появляется всплывающая подсказка слева от строки игры с подробной информацией:<br>издатели, разработчики, серия, отзывы (% и кол-во), статус раннего доступа, поддержка языков, первые 5 меток, краткое описание.</li>
<img src="https://i.imgur.com/U7DYIvJ.png" alt="[Пример дополнительной информации об игре в каталоге]" style="border: 1px solid #333;">
</ul>
<hr style="border: 1px solid #2a3f5a;">
<p><strong>Фильтры (панель справа):</strong></p>
<ul>
<li><strong>Русский перевод:</strong>
<ul>
<li><em>Только текст:</em> Игры с рус. интерфейсом/субтитрами (без озвучки).</li>
<li><em>Озвучка:</em> Игры с русской озвучкой.</li>
<li><em>Без перевода:</em> Игры без русского языка.</li>
</ul>
<img src="https://i.imgur.com/nLfsBzR.png" alt="[Пример фильтрации по русскому переводу в каталоге]" style="border: 1px solid #333;">
</li>
<br>
<li><strong>DLC:</strong>
<ul>
<li><em>Только ваши DLC:</em> Показывает только DLC для игр, которые есть в вашей библиотеке<br>(сами DLC подсвечиваются фиолетовым фоном).</li>
</ul>
<img src="https://i.imgur.com/MqjuXoD.png" alt="[Пример фильтрации DLC в каталоге]" style="border: 1px solid #333;">
</li>
</ul>
<p>Фильтры применяются динамически по мере получения данных от API.</p>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Скрытие игр</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет инструменты для массового скрытия неинтересующих игр прямо со страницы поиска по каталогу.</p>
<p><strong>Элементы интерфейса:</strong></p>
<ul>
<li>Счетчик отображаемых игр (слева вверху).</li>
<li>Чекбокс слева от каждой игры (кроме уже купленных/скрытых/в желаемом) для отметки на скрытие.</li>
<li>Кнопка "Скрыть выбранное" (слева вверху).</li>
</ul>
<p><strong>Принцип работы:</strong></p>
<ol>
<li>Отмечаете чекбоксами игры, которые хотите скрыть.</li>
<li>Нажимаете "Скрыть выбранное".</li>
<li>Скрипт добавляет эти игры в ваш официальный список игнорируемых в Steam и удаляет их элементы со страницы.</li>
</ol>
<p>В отличие от стандартного механизма Steam, элементы полностью удаляются из DOM, что улучшает производительность при работе с большим количеством результатов.</p>
<p><strong>Внимание:</strong> Рекомендуется использовать только при необходимости массового скрытия.<br>Для обычного просмотра каталога лучше отключать эту опцию.</p>
<center><img src="https://i.imgur.com/uCA8x2P.png" alt="[Пример системы скрытия игр в каталоге]" style="border: 1px solid #333;"></center>
</div>
</details>
</div>
<hr style="border: 1px solid #2a3f5a;">
<div id="community_features">
<h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;">
<center>Сообщество и активность</center>
</h2>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Доп. инфо в ленте активности</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет всплывающую подсказку при наведении на название игры в вашей ленте активности Steam (<a href="https://steamcommunity.com/my/home" target="_blank" style="color:#67c1f5;">steamcommunity.com/my/home</a>).</p>
<p>Подсказка содержит подробную информацию об игре, аналогичную той, что показывается в каталоге поиска:</p>
<ul>
<li>Название и изображение-шапка.</li>
<li>Дата выхода.</li>
<li>Издатели, разработчики, серия игр.</li>
<li>Отзывы (% и кол-во).</li>
<li>Статус раннего доступа.</li>
<li>Поддержка русского и английского языков.</li>
<li>Первые 5 меток.</li>
<li>Краткое описание.</li>
</ul>
<p>Данные загружаются через API Steam.</p>
<center><img src="https://i.imgur.com/xE75iU8.png" alt="[Пример дополнительной информации в ленте активности Steam]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Рулетка Stelicas</summary><div style="border-top: 1px solid #2a3f5a;">
<p><strong>Что делает:</strong><br>Добавляет блок "Рулетка Stelicas" на страницу вашей активности Steam (<a href="https://steamcommunity.com/my/home" target="_blank" style="color:#67c1f5;">steamcommunity.com/my/home</a>). Позволяет загрузить CSV-файл, сгенерированный приложением <a href="https://github.com/0wn3dg0d/Stelicas" target="_blank" style="color:#67c1f5;">Stelicas</a>, применить к нему разнообразные фильтры и случайным образом выбрать игру из вашей коллекции.</p>
<p><strong>Возможности:</strong></p>
<ul style="margin-left: 20px; padding-left: 5px; list-style-type: disc;">
<li style="margin-bottom: 0.5em;">Загрузка CSV-данных из Stelicas (содержащих информацию о ваших играх и коллекциях).</li>
<li style="margin-bottom: 0.5em;"><strong>Система фильтрации:</strong> по категориям коллекций Stelicas, дате выхода, пользовательским тегам, поддержке русского языка (интерфейс, субтитры, озвучка), а также по диапазонам количества отзывов и общего рейтинга игры.</li>
<li style="margin-bottom: 0.5em;">Анимированная рулетка для выбора случайной игры из отфильтрованного списка.</li>
<li style="margin-bottom: 0.5em;">Возможность включить приоритет по отзывам и рейтингу, чтобы игры с лучшими показателями имели больше шансов на выпадение.</li>
<li style="margin-bottom: 0.5em;">Переключение в режим <strong>просмотра всей отфильтрованной подборки</strong> игр в виде удобных карточек (изображение и название).</li>
<li style="margin-bottom: 0.5em;">Отображение подробной информации о выбранной (или просматриваемой в подборке) игре: постер, название, рейтинг и количество отзывов, краткое описание, основные теги, точная дата выхода, разработчики/издатели, информация о поддержке русского языка.</li>
<li style="margin-bottom: 0.5em;">Прямые ссылки на страницу игры в сообществе Steam и для её запуска через протокол <code>steam://run/&lt;AppID&gt;</code>.</li>
</ul>
<p><strong>Как пользоваться:</strong></p>
<ul style="margin-left: 20px; padding-left: 5px; list-style-type: disc;">
<li style="margin-bottom: 0.5em;">Подробная инструкция по подготовке CSV-файла и использованию всех функций рулетки доступна по нажатию на значок вопроса <strong>?</strong> в правом верхнем углу окна самой рулетки.</li>
</ul>
<p><em>Примечание: Качество работы и полнота информации в рулетке напрямую зависят от корректности и актуальности данных в предоставленном CSV-файле из Stelicas.</em></p>
<center><img src="https://i.imgur.com/KDfW10m.png" alt="Пример модального окна Рулетки Stelicas с фильтрами" style="max-width: 90%; height: auto; margin-top: 10px; border: 1px solid #333; border-radius: 4px;"></center>
</div>
</details>
</div>
<hr style="border: 1px solid #2a3f5a;">
<div id="market_features">
<h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;">
<center>Торговая площадка</center>
</h2>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Продажи предмета</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет информационный блок на страницу предмета на торговой площадке Steam (<a href="https://steamcommunity.com/market/" target="_blank" style="color:#67c1f5;">steamcommunity.com/market/</a>).</p>
<p>Блок содержит:</p>
<ul>
<li>Таблицу с историей продаж по годам:
<ul>
<li>Общая сумма продаж за год (в рублях).</li>
<li>Примерная сумма, полученная разработчиком игры.</li>
<li>Примерная сумма, полученная Valve.</li>
</ul>
</li>
<li>Итоговую сумму продаж за все время.</li>
<li>Итоговые суммы, полученные разработчиком и Valve.</li>
</ul>
<p>Данные загружаются через API истории цен Steam.</p>
<center><img src="https://i.imgur.com/ZPnzyNH.png" alt="[Пример информации об исторических продажах на торговой площадке]" style="border: 1px solid #333;"></center>
</div>
</details>
</div>
<hr style="border: 1px solid #2a3f5a;">
<div id="news_wishlist_features">
<h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;">
<center>Новости и список желаемого</center>
</h2>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Наблюдатель (Желаемое/Библиотека)</summary><div style="border-top: 1px solid #2a3f5a;">
    <p><strong>Что делает:</strong><br>Отслеживает изменения в вашем списке желаемого Steam и в вашей библиотеке игр, отображает календарь релизов.</p>
    <p><strong>Основные функции:</strong></p>
    <ol style="margin-left: 20px; padding-left: 5px; list-style-type: decimal;">
        <li style="margin-bottom: 0.7em;">В правом верхнем углу страниц Steam появляется кнопка "Наблюдатель".</li>
        <li style="margin-bottom: 0.7em;"><strong>Индикаторы статуса (Ж/Б):</strong> Показывают, как давно обновлялись данные для <strong>Ж</strong>елаемого и <strong>Б</strong>иблиотеки.</li>
        <li style="margin-bottom: 0.7em;"><strong>Счетчик уведомлений:</strong> Показывает количество новых (непрочитанных) изменений.</li>
        <li style="margin-bottom: 0.7em;"><strong>Панель уведомлений (по щелчку на кнопку):</strong>
            <ul style="margin-top: 0.8em; margin-left: 15px; list-style-type: disc;">
                <li style="margin-bottom: 0.5em;">Кнопка "Обновить" для ручного запуска проверки (использует Steam API).</li>
                <li style="margin-bottom: 0.5em;"><strong>Настройки (значок ⚙️):</strong> Открывает выпадающее меню с опциями:
                    <ul style="margin-top: 0.5em; margin-left: 15px; list-style-type: square;">
                        <li style="margin-bottom: 0.3em;"><strong>Список желаемого / Библиотека:</strong> Позволяют включать/отключать проверку для каждой из секций.</li>
                        <li style="margin-bottom: 0.3em;"><strong>Перепроверять игры с русским:</strong> <em>(Опция для Библиотеки)</em>. По умолчанию включена. Если её <strong>отключить</strong>, скрипт пропустит проверку игр, для которых уже известно о наличии <strong>любой</strong> русской локализации. Это значительно ускоряет повторные обновления.</li>
                        <li style="margin-bottom: 0.3em;"><strong>...только без полной локализации:</strong> <em>(Доступна, если предыдущая опция отключена)</em>. Если включить, то из повторной проверки будут исключаться только игры с <strong>полной</strong> локализацией (интерфейс+озвучка+субтитры). Игры с частичным переводом продолжат проверяться.</li>
                    </ul>
                </li>
                <li style="margin-bottom: 0.5em;">Список изменений:
                    <ul style="margin-top: 0.5em; margin-left: 15px; list-style-type: square;">
                        <li style="margin-bottom: 0.3em;"><strong>Список желаемого:</strong> Изменение даты выхода, статуса раннего доступа или русского языка.</li>
                        <li style="margin-bottom: 0.3em;"><strong>Библиотека:</strong> Выход игры из раннего доступа, появление/изменение русского языка (и тип локализации).</li>
                    </ul>
                </li>
                <li style="margin-bottom: 0.5em;">Кнопки для отметки уведомления как прочитанного (конверт) или удаления (крестик).</li>
                <li style="margin-bottom: 0.5em;">Кнопка "Очистить" для удаления всех уведомлений.</li>
                <li style="margin-bottom: 0.5em;">Кнопка "Календарь".</li>
                <li style="margin-bottom: 0.5em;">Кнопка "Хранилище" для очистки сохраненных данных.</li>
            </ul>
         </li><br>
         <center><img src="https://i.imgur.com/BpuDq6U.png" alt="Пример Трекера 1" style="max-width: 90%; height: auto; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #333;"></center>
         <hr style="border: none; border-top: 1px solid #444a52; margin: 1.5em 0;">
         <li style="margin-bottom: 0.7em;"><strong>Календарь релизов (по щелчку на кнопку "Календарь"):</strong>
            <ul style="margin-top: 0.8em; margin-left: 15px; list-style-type: disc;">
                <li style="margin-bottom: 0.5em;">Отображает игры из вашего списка желаемого в виде календаря по месяцам.</li>
                <li style="margin-bottom: 0.5em;">Показывает игры с точными датами выхода в будущем.</li>
                <li style="margin-bottom: 0.5em;">Для игр с примерной датой (месяц, квартал, год) отображается подсказка при наведении.</li>
                <li style="margin-bottom: 0.5em;">Позволяет подгружать следующие месяцы.</li>
            </ul>
         </li><br>
<center><img src="https://i.imgur.com/b5PDYG3.png" alt="Пример Календаря" style="max-width: 90%; height: auto; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #333;"></center>
         <hr style="border: none; border-top: 1px solid #444a52; margin: 1.5em 0;">
          <li style="margin-bottom: 0.7em;"><strong>Хранилище (по щелчку на кнопку "Хранилище"):</strong>
            <ul style="margin-top: 0.8em; margin-left: 15px; list-style-type: disc;">
                <li style="margin-bottom: 0.5em;">Позволяет очистить кэш дат/статусов для списка желаемого или для игр библиотеки.</li>
            </ul>
         </li><br>
<center><img src="https://i.imgur.com/nI6Uoo0.png" alt="Пример Хранилища" style="max-width: 90%; height: auto; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #333;"></center>
    </ol>
    <p>Требует авторизации. Обработка больших списков/библиотек может занять время. Используйте новые опции в настройках для ускорения сканирования библиотеки.</p>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Доступность подарков (список желаемого)</summary>
<div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong><br>Добавляет значок лупы. Позволяет определить, какие игры можно подарить друзьям в других регионах.</p>
<p><strong>Основные функции:</strong></p>
<ul>
<li>Загружает игры из отображаемого списка желаемого и выводит их в виде информативных карточек с возможностью сортировки.</li>
<li>Активирует режим <strong>помощника подарков</strong>:
<ul>
<li>Вы выбираете регион вашего друга.</li>
<li>Скрипт запрашивает цены на игры из списка желаемого для выбранного региона.</li>
<li>Цены друга конвертируются в вашу валюту (используется API курсов валют).</li>
<li>Отображается <strong>разница в цене</strong> между вашим регионом и регионом друга<br>(с цветовой индикацией: <span style="color:#77dd77;">зелёный</span> - можно дарить (разница до ±10%), <span style="color:#ff6961;">красный</span> - нельзя).</li>
<li>Доступен фильтр <strong>"Можно подарить"</strong>, который показывает только те игры, у которых разница в цене до ±10% и которые Steam разрешает покупать в подарок.</li>
</ul>
</li>
</ul>
<p>Это помогает легко найти подходящие и экономически целесообразные подарки для друзей за границей.</p>
<p>Скорость загрузки данных зависит от размера списка желаемого.</p>
<center><img src="https://i.imgur.com/WPbhyPI.png" alt="[Пример работы помощника подарков для списка желаемого]" style="border: 1px solid #333;"></center>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a;"><summary style="color: #67c1f5;">Фильтр новостей</summary><div style="border-top: 1px solid #2a3f5a;"><p><strong>Что делает:</strong> Позволяет гибко управлять отображением новостей в новостном центре Steam (<a href="https://store.steampowered.com/news/" target="_blank" style="color:#67c1f5;">store.steampowered.com/news/</a>), скрывая неинтересные материалы.</p>
<p><strong>Основные возможности и использование:</strong></p>
<ol style="margin-left: 20px; padding-left: 5px; list-style-type: decimal;">
<li style="margin-bottom: 0.7em;"><strong>Выбор новостей для скрытия:</strong>
<ul>
<li>На каждой новости в правой части изображения появляется крупный квадратный чекбокс.</li>
<li>При установке галочки новость становится полупрозрачной (<em>"мягкое" скрытие</em>)<br>и отмечается для последующего подтверждения скрытия. Повторный щелчок снимает отметку.</li>
</ul>
</li><br>
<li style="margin-bottom: 0.7em;"><strong>Панель управления (справа вверху):</strong>
<ul>
<li>"Скрыть выбранные (X)": Нажатие этой кнопки перемещает все отмеченные (полупрозрачные) новости в постоянное хранилище.<br>Новость исчезает с экрана (или становится затемненной, если включен режим "Показать скрытое").<br>Счетчик в скобках показывает, сколько новостей сейчас выбрано.</li>
<li>"В хранилище: X": Эта надпись показывает общее количество новостей, находящихся в хранилище скрытых новостей.</li>
<li>"Отменить": Появляется после подтверждения скрытия и активна 6 секунд.<br>Позволяет отменить последнее действие по добавлению новостей в хранилище.</li>
<li>"Показать скрытое" / "Спрятать скрытое": Переключатель.<br>Если выбрано "Показать скрытое", новости из вашего хранилища будут отображаться в ленте, но в затемненном виде.<br>В режиме "Спрятать скрытое" они полностью исчезают.</li>
<li>"Хранилище": Открывает модальное окно для управления списком постоянно скрытых новостей.</li>
</ul>
</li>
<br><img src="https://i.imgur.com/iYTtyWk.png" alt="Пример интерфейса фильтра новостей" style="max-width: 90%; height: auto; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #333;">
<br><li style="margin-bottom: 0.7em;"><strong>Панель "Хранилище скрытых новостей":</strong>
<ul>
<li>Отображает список всех новостей, добавленных в постоянное хранилище.<br>Для каждой записи указывается название игры, заголовок новости и ее AppID.</li>
<li>"Вернуть": Кнопка напротив каждой записи позволяет удалить новость из хранилища и немедленно отобразить ее в ленте.<br>Чекбокс на этой новости также снова станет активным.</li>
<li>"Очистить хранилище": Удаляет все новости из вашего списка постоянно скрытых. Требует подтверждения.</li>
<li>"Закрыть": Закрывает панель хранилища.</li>
<br><center><img src="https://i.imgur.com/T5pUb9a.png" alt="Пример интерфейса хранилища" style="max-width: 90%; height: auto; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #333;"></center>
</ul>
</li>
</ol></div>
</details>
</div>
<hr style="border: 1px solid #2a3f5a;">
<div id="main_settings"><h2 style="color: #67c1f5; border-bottom: 1px solid #444a52;"><center>Настройки</center></h2><div style="color: #8f98a0;"><details style="background-color: #17202d; border: 1px solid #2a3f5a; margin-bottom: 15px;"><summary style="color: #67c1f5; padding: 8px 12px; cursor: pointer; display: block;">Как найти и использовать меню настроек U.S.E.</summary>
<div style="border-top: 1px solid #2a3f5a; padding: 10px 12px;">
<p>Для настройки отдельных модулей скрипта и их параметров используйте меню настроек U.S.E.<br>Оно находится в выпадающем меню вашего профиля Steam (в правом верхнем углу), как показано ниже:</p>
<center><img src="https://i.imgur.com/QUdKoCH.png" alt="[Расположение меню настроек U.S.E. в профиле Steam]" style="border: 1px solid #333; margin-top: 10px; margin-bottom: 15px;"></center>
<p>В открывшемся окне настроек вы сможете включать или отключать модули скрипта:</p>
<center><img src="https://i.imgur.com/oTJeMwz.png" alt="[Пример панели настроек Ultimate Steam Enhancer]" style="border: 1px solid #333; margin-top: 10px; margin-bottom: 10px; max-width: 100%; height: auto;"></center>
</div>

<p style="margin-top: 5px; margin-bottom: 15px;">Также в меню настроек доступны следующие опции:</p>
<details style="background-color: #17202d; border: 1px solid #2a3f5a; margin-bottom: 10px;"><summary style="color: #67c1f5; padding: 8px 12px; cursor: pointer; display: block;">Авто-раскрытие HLTB</summary><div style="border-top: 1px solid #2a3f5a; padding: 10px 12px;"><p>Если включено, блок с информацией о времени прохождения (HLTB) на странице игры будет автоматически раскрываться при загрузке страницы (если основной модуль HLTB включен).</p>
<p>Удобно, если вы всегда хотите видеть эту информацию без лишнего щелчка.</p>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a; margin-bottom: 10px;"><summary style="color: #67c1f5; padding: 8px 12px; cursor: pointer; display: block;">Авто-загрузка доп. обзоров</summary><div style="border-top: 1px solid #2a3f5a; padding: 10px 12px;"><p>Если включено, блок с дополнительными обзорами (Тотальные, Безкитайские, Русские) на странице игры будет загружаться автоматически при загрузке страницы (если основной модуль 'Индикаторы/Обзоры' включен).</p>
<p>Экономит щелчок, если вам всегда нужна эта статистика.</p>
</div>
</details>
<details style="background-color: #17202d; border: 1px solid #2a3f5a; margin-bottom: 10px;"><summary style="color: #67c1f5; padding: 8px 12px; cursor: pointer; display: block;">Показ инфо об англ. языке</summary><div style="border-top: 1px solid #2a3f5a; padding: 10px 12px;"><p><strong>Функция для переводчиков и интересующихся.</strong> Если включено, в блоках дополнительной информации (в каталоге при наведении и в ленте активности при наведении) будет также отображаться информация о поддержке английского языка (интерфейс, озвучка, субтитры), аналогично русскому.</p>
<p>По умолчанию эта информация скрыта для экономии места.</p>
</div>
</details>
</div>
</details>
</div>
<br>
<hr style="border: 1px solid #2a3f5a;">
<p>Автор: 0wn3df1x<br>и команда <a href="https://www.zoneofgames.ru" target="_blank" style="color:#67c1f5;">ZoneOfGames.ru</a></p>
</div>
</div>
