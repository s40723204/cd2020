var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week1-5 \n week6-9 \n week10-15 \n week11-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1-5', 'text': 'week1\xa0 創建個人倉儲網站 \n 1.利用2019fall可攜程式系統來進行倉儲創建及網站編輯 \n 2.建立個人github cd2020倉儲，並git clone個人倉儲以創建網站 \n 3.利用 git clone --recurse-submodules 加上個人倉儲網址git cone倉儲 \n 4.接著利用git submodule add\xa0\xa0 https://github.com/mdecourse/cmsimde 建立cmsimde目錄 \n 5.完成後即可開啟9443編輯個人網站 \n 6.拍攝操作影片 \n 影片: https://youtu.be/07stRY84SC0 \n \n week2\xa0 更新py3.8.2 \n 1.在隨身系統裡新增 cd2020>data 資料夾，在 data 裡新增 py382 及 wscite432、\xa0 \xa0portablegity  資料夾 \n 2.到\xa0 python\xa0 官網  download  下點  windows ，點進  Latest Python 3 Release - Python 3.8.2 ，找到  Windows x86-64 executable installer  下載安裝 \n 3. Windows x86-64 executable installer  下載開啟後點\xa0 customize installation\xa0 進行安裝，將  pip 的勾取消 ，將下載路徑放至\xa0 py382\xa0 裡 \n 4.接著下載\xa0 full 64-bit download ，解壓縮至  wscite432  裡 \n 5.在  data  裡建立新的  start.bat  跟  stop.bat ，將兩啟動檔裡的  py373  都更改成  py382 ，完成後重新啟動程式 \n 6.下載 \xa0msys2-x86_64-20190524.exe \xa0放至  data \n 7.下載\xa0 64-bit Git for Windows Portable  放至  portablegity  裡 \n 8.到  https://bootstrap.pypa.io/get-pip.py\xa0 頁面令存新檔至\xa0 data \n 9.利用小黑框執行\xa0 python get-pip.py  和\xa0\xa0 pip install flask bs4 lxml pelican\xa0markdown flask_cors leo \xa0\xa0兩指令 \n 10. 完成後開啟 近端9443 確認可以使用，利用小黑框執行 python 檢查版本為 3.8.2 即可 \n 11.拍攝操作影片 \n 影片: https://youtu.be/24IMbEdtGKg \n \n \n week3\xa0 Assignment 1 ( 可攜系統 ) \n 組長開直播分配Assignment 1工作，我所做的是 可攜系統 \n 1.在隨身碟裡創建 cd2020 資料夾，在cd2020裡創建 data 資料夾，在data裡分別創建 home / msys2 / PortableGit / python383 / tmp / wscite237 \n 2.到\xa0 https://git-scm.com/download/win 下載 64-bit Git for Windows Portable ，並開啟安裝至 cd2020>data>PortableGit \n 3.到  https://www.msys2.org/  下載\xa0 msys2-x86_64-20190524.exe ，並開啟安裝至 cd2020>data>msys2 \n 4.到 \xa0https://www.python.org/downloads/release/python-382/  下載\xa0 Windows x86-64 executable installer ，開啟點選  modify ，將  pip  選項取消  py launcher  打勾並開始安裝，因為安裝路徑無法更改所以要到內定安裝路徑將下載的東西貼到 \xa0python383 \n 5.到 \xa0https://www.scintilla.org/SciTEDownload.html \xa0 下載\xa0 full 64-bit download ，下載完後解壓縮到\xa0 wscite237。 到解壓縮完的資料夾找到\xa0 SciTE.exe\xa0 檔並開啟，利用它開啟 start.bat\xa0 檔，將所有\xa0 py373\xa0 更改為  py383 。然後將所有  wscite415  更改成 wscite237 ，將此  start.bat  檔跟  stop.bat  放到  cd2020  裡。打開  options  下的  open global options files， 找到\xa0 load.on.activate=1  /\xa0 code.page=65001  /  code.page=0  將前面  #  刪掉。 \n \n \n \n \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'Week6-9', 'text': '', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'Week10-15', 'text': '', 'tags': '', 'url': 'Week10-15.html'}, {'title': 'Week11-18', 'text': '', 'tags': '', 'url': 'Week11-18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};