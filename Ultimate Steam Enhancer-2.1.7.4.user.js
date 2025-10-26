// ==UserScript==
// @name         ZoG News Post Constructor for Ultimate Steam Enhancer 2.1.7.4
// @namespace    https://forum.zoneofgames.ru/
// @version      1.4 // <-- Updated version
// @description  Создает новостной пост о выходе Ultimate Steam Enhancer 2.1.7.4 с полным описанием и списком изменений. // <-- Updated version
// @author       0wn3df1x & Gemini
// @match        https://forum.zoneofgames.ru/forum/*/?do=add
// @match        https://forum.zoneofgames.ru/topic/*/?do=edit*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        #use-news-constructor-button {
            position: fixed; bottom: 25px; right: 220px; z-index: 9999;
            padding: 12px 20px; background-color: #5c9d4f; color: #ffffff;
            border: none; border-radius: 8px; cursor: pointer; font-size: 14px;
            font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.2s ease-in-out;
        }
        #use-news-constructor-button:hover { background-color: #6ebf5f; transform: translateY(-2px); }
    `);

    // <-- Updated version in button text -->
    $('body').append('<button id="use-news-constructor-button">Создать новость про U.S.E. 2.1.7.4</button>');

    $('#use-news-constructor-button').on('click', () => {
        if (confirm('Вы уверены, что хотите вставить текст новости в редактор? Текущее содержимое будет заменено.')) {
            const fullPostHTML = buildFullPost();
            insertIntoEditor(fullPostHTML);
        }
    });

    function createSpoiler(title, content) {
        const cleanTitle = title.replace(/"/g, '&quot;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
        // Используем стили ZoG для спойлеров
        return `
            <div class="ipsSpoiler" data-ipsspoiler="" data-ipsspoiler-option="${cleanTitle}">
                <div class="ipsSpoiler_header"><span>${cleanTitle}</span></div>
                <div class="ipsSpoiler_contents">${content}</div>
            </div>
        `;
    }

    // <-- Replaced buildChangelog function with new content -->
    function buildChangelog() {
        // Используем предоставленный HTML напрямую, адаптировав стили под ZoG
        const changelogHTML = `
            <div style="color: #4a5568;"> <h2 style="color: #4a5568; border-bottom: 1px solid #dcdcdc; padding-bottom: 5px; margin-top: 20px; margin-bottom: 15px; font-size: 20px;">
                    <span style="color: #ffcc00;">✨</span> Улучшения
                </h2>
                ${createSpoiler('Виртуальный режим «Инкогнито» теперь работает и для Центра сообщества', `
                    <div style="background-color: #f7fafc; border: 1px solid #dcdcdc; border-radius: 4px; padding: 15px; margin-top: 15px; color: #2d3748;">
                         <p><strong>Что изменилось?</strong> В связи с недавними изменениями Steam, для некоторых пользователей стали недоступны Центры сообщества игр, заблокированных в их регионе (если игра отсутствует в библиотеке). Теперь Виртуальный режим «Инкогнито» (В.Р.И.) автоматически обнаруживает такие блокировки не только на страницах магазина, но и на страницах Центра сообщества.</p>
                         <p><strong>Как это работает?</strong></p>
                         <ul style="padding-left: 20px; margin-top: 10px; list-style-type: circle;">
                            <li style="margin-bottom: 8px;">При обнаружении сообщения "Этот центр сообщества недоступен в вашем регионе" (или аналогичного на английском), скрипт автоматически попытается загрузить эту же страницу Центра сообщества через регион, указанный в настройках В.Р.И. (по умолчанию US).</li>
                            <li style="margin-bottom: 8px;">Это позволяет получить доступ к обсуждениям, руководствам, скриншотам и другому контенту сообщества для игр, недоступных в вашем регионе.</li>
                         </ul>
                    </div>
                `)}
                <br> ${createSpoiler('Панель управления фильтра новостей стала перемещаемой', `
                    <div style="background-color: #f7fafc; border: 1px solid #dcdcdc; border-radius: 4px; padding: 15px; margin-top: 15px; color: #2d3748;">
                        <p><strong>Что изменилось?</strong> Панель управления для скрытия новостей (с кнопками "Скрыть выбранное", "Хранилище" и т.д.), которая появляется в правом верхнем углу ленты новостей, теперь можно перемещать.</p>
                        <p><strong>Как использовать:</strong></p>
                        <ul style="padding-left: 20px; margin-top: 10px; list-style-type: circle;">
                            <li style="margin-bottom: 8px;">Наведите курсор на свободное место панели (не на кнопки).</li>
                            <li style="margin-bottom: 8px;">Нажмите и удерживайте левую кнопку мыши.</li>
                            <li style="margin-bottom: 8px;">Перетащите панель в удобное для вас место на экране.</li>
                            <li style="margin-bottom: 8px;">Отпустите кнопку мыши.</li>
                        </ul>
                        <p>Позиция панели будет сохранена и восстановится при следующем посещении ленты новостей.</p>
                    </div>
                `)}
            </div>
        `;

        return `
            <div style="font-family: 'Exo 2', sans-serif; line-height: 1.6;">
                <p>Обновление, расширяющее возможности <strong>Виртуального режима «Инкогнито»</strong> на Центр сообщества и добавляющее улучшения для <strong>Фильтра новостей</strong>.</p>
                <hr style="border-top: 1px solid #dcdcdc; margin: 20px 0;">
                ${changelogHTML}
            </div>
        `;
    }

    function buildFullPost() {
        const changelogHTML = buildChangelog();
        const greasyforkLink = "https://greasyfork.org/ru/scripts/494879-ultimate-steam-enhancer"; // Обнови ссылку, если она изменилась
        const fullDescriptionLink = "https://0wn3df1x.github.io/Ultimate-Steam-Enhancer/";

        const introHTML = `
            <div style="text-align: center;">
                <h1 style="color: #4a5568; font-size: 2em;">Ultimate Steam Enhancer</h1>
                <p><strong>Версия 2.1.7.4</strong></p> </div>
            <p><strong>Ultimate Steam Enhancer</strong> — это мощный пользовательский скрипт для платформы Steam, расширяющий стандартные возможности магазина и сообщества. Он объединяет в себе функционал множества инструментов, предоставляя пользователю расширенный контроль и доступ к дополнительной информации об играх, ценах, переводах, обзорах, активности друзей и многом другом.</p>
            <div style="text-align: center; margin: 25px 0;">
                <a href="${greasyforkLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); transition: box-shadow 0.3s ease, transform 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 25px rgba(92, 157, 79, 0.3)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.boxShadow='0 4px 15px rgba(0, 0, 0, 0.1)'; this.style.transform='translateY(0)';">
                    <img src="https://i.imgur.com/NzU7H2j.png" alt="Установить с Greasy Fork" style="max-width: 550px; display: block;">
                </a>
            </div>
            <hr style="border-top:1px solid #dcdcdc; margin: 25px 0;">
            <div style="text-align: center; margin: 20px 0;">
                <p>Подробное описание всех функций доступно на специальной странице:</p>
                <a href="${fullDescriptionLink}" target="_blank" title="Нажмите, чтобы просмотреть полное описание с изображениями" style="display: inline-block; background-color: #f7fafc; border:1px solid #dcdcdc; color: #2d3748; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; font-weight: bold; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#e2e8f0';" onmouseout="this.style.backgroundColor='#f7fafc';">
                    Посмотреть полное описание функций
                </a>
            </div>
            <hr style="border-top:1px solid #dcdcdc; margin: 25px 0;">
        `;

        const postHTML = `
            ${introHTML}
            ${createSpoiler('Что нового в версии 2.1.7.4', changelogHTML)} `;

        return postHTML;
    }

    function insertIntoEditor(htmlToInsert) {
        if (typeof CKEDITOR === 'undefined') {
            alert('Редактор CKEditor не найден. Убедитесь, что вы находитесь на странице создания или редактирования поста.');
            return;
        }

        let editor;
        for (const instanceName in CKEDITOR.instances) {
            if (CKEDITOR.instances.hasOwnProperty(instanceName)) {
                const currentEditor = CKEDITOR.instances[instanceName];
                // Проверяем, что редактор видимый и активный
                if (currentEditor.container.$ && currentEditor.container.$.style.display !== 'none' && currentEditor.mode !== 'source') {
                    editor = currentEditor;
                    break;
                }
            }
        }

        if (editor) {
            editor.setData(htmlToInsert, {
                callback: function() {
                    this.focus();
                    console.log('Контент успешно вставлен в редактор.');
                    // Устанавливаем заголовок поста, если это страница создания новой темы
                    if (window.location.search.includes('do=add')) {
                         const titleInput = document.querySelector('input[name="topic_title"]');
                         if (titleInput) {
                             titleInput.value = 'Ultimate Steam Enhancer — Версия 2.1.7.4'; // <-- Updated version
                         }
                    }
                }
            });
        } else {
             // Пытаемся найти текстовое поле, если CKEditor не найден (на случай проблем с CKEditor)
             const textarea = $('textarea.ipsEditor_textarea').get(0);
             if (textarea) {
                 textarea.value = htmlToInsert.replace(/<[^>]*>?/gm, ''); // Вставляем без HTML
                 alert('Активный редактор CKEditor не найден. Текст вставлен в текстовое поле без форматирования.');
                 // Устанавливаем заголовок поста
                  if (window.location.search.includes('do=add')) {
                     const titleInput = document.querySelector('input[name="topic_title"]');
                     if (titleInput) {
                         titleInput.value = 'Ultimate Steam Enhancer — Версия 2.1.7.4'; // <-- Updated version
                     }
                  }
             } else {
                 alert('Редактор CKEditor или текстовое поле не найдены. Пожалуйста, убедитесь, что поле для ввода текста открыто и активно.');
             }
        }
    }

})();
