var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week1-5 \n week6-10 \n week11-15 \n week16-18 \n 個人倉儲網址 :\xa0\xa0 https://github.com/s40723204/cd2020 \n 分組倉儲網址 :\xa0 https://github.com/s40723204/cd2020bg4?organization=s40723204&organization=s40723204 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1-5', 'text': 'week1\xa0 創建個人倉儲網站 \n 1.利用2019fall可攜程式系統來進行倉儲創建及網站編輯 \n 2.建立個人github cd2020倉儲，並git clone個人倉儲以創建網站 \n 3.利用 git clone --recurse-submodules 加上個人倉儲網址git cone倉儲 \n 4.接著利用git submodule add\xa0\xa0 https://github.com/mdecourse/cmsimde 建立cmsimde目錄 \n 5.完成後即可開啟9443編輯個人網站 \n 6.拍攝操作影片 \n 影片: https://youtu.be/07stRY84SC0 \n \n week2\xa0 更新py3.8.2 \n 1.在隨身系統裡新增 cd2020>data 資料夾，在 data 裡新增 py382 及 wscite432、\xa0 \xa0portablegity  資料夾 \n 2.到\xa0 python\xa0 官網  download  下點  windows ，點進  Latest Python 3 Release - Python 3.8.2 ，找到  Windows x86-64 executable installer  下載安裝 \n 3. Windows x86-64 executable installer  下載開啟後點\xa0 customize installation\xa0 進行安裝，將  pip 的勾取消 ，將下載路徑放至\xa0 py382\xa0 裡 \n 4.接著下載\xa0 full 64-bit download ，解壓縮至  wscite432  裡 \n 5.在  data  裡建立新的  start.bat  跟  stop.bat ，將兩啟動檔裡的  py373  都更改成  py382 ，完成後重新啟動程式 \n 6.下載 \xa0msys2-x86_64-20190524.exe \xa0放至  data \n 7.下載\xa0 64-bit Git for Windows Portable  放至  portablegity  裡 \n 8.到  https://bootstrap.pypa.io/get-pip.py\xa0 頁面令存新檔至\xa0 data \n 9.利用小黑框執行\xa0 python get-pip.py  和\xa0\xa0 pip install flask bs4 lxml pelican\xa0markdown flask_cors leo \xa0\xa0兩指令 \n 10. 完成後開啟 近端9443 確認可以使用，利用小黑框執行 python 檢查版本為 3.8.2 即可 \n 11.拍攝操作影片 \n 影片: https://youtu.be/24IMbEdtGKg \n \n \n week3\xa0 Assignment 1 ( 可攜系統 ) \n 組長開直播分配Assignment 1工作，我所做的是 可攜系統 \n 1.在隨身碟裡創建 cd2020 資料夾，在cd2020裡創建 data 資料夾，在data裡分別創建 home / msys2 / PortableGit / python383 / tmp / wscite237 \n 2.到\xa0 https://git-scm.com/download/win 下載 64-bit Git for Windows Portable ，並開啟安裝至 cd2020>data>PortableGit \n 3.到  https://www.msys2.org/  下載\xa0 msys2-x86_64-20190524.exe ，並開啟安裝至 cd2020>data>msys2 \n 4.到 \xa0https://www.python.org/downloads/release/python-382/  下載\xa0 Windows x86-64 executable installer ，開啟點選  modify ，將  pip  選項取消  py launcher  打勾並開始安裝，因為安裝路徑無法更改所以要到內定安裝路徑將下載的東西貼到 \xa0python383 \n 5.到 \xa0https://www.scintilla.org/SciTEDownload.html \xa0 下載\xa0 full 64-bit download ，下載完後解壓縮到\xa0 wscite237。 到解壓縮完的資料夾找到\xa0 SciTE.exe\xa0 檔並開啟，利用它開啟 start.bat\xa0 檔，將所有\xa0 py373\xa0 更改為  py383 。然後將所有  wscite415  更改成 wscite237 ，將此  start.bat  檔跟  stop.bat  放到  cd2020  裡。打開  options  下的  open global options files， 找到\xa0 load.on.activate=1  /\xa0 code.page=65001  /  code.page=0  將前面  #  刪掉。 \n 6.開啟  start.bat  檔，到\xa0 https://github.com/TinyCC/tinycc\xa0 git clone\xa0 此倉儲到 cd2020 。到  https://bootstrap.pypa.io/get-pip.py  另存新檔到  cd2020>data ，完成後開啟小黑框輸入  python get-pip.py\xa0 指令，等待完成後再輸入\xa0 pip install jupyterlab==2.0.1  。 \n 7.到\xa0 https://www.fossil-scm.org/home/uv/download.html  下載  windows\xa0Version 2.10  解壓縮檔案到  cd2020>data ， 接著到 \xa0https://github.com/flutter/flutter\xa0 git clone  此倉儲，接著到\xa0 https://github.com/microsoft/vscode\xa0 git clone \xa0 此倉儲。 \n 8. git clone  個人  cd2020 倉儲\xa0 至  cd2020>data>tmp ，接著到\xa0 cd2020>data>tmp>cd2020>cmsimde ，利用小黑框打上\xa0 pip install flask bs4 lxml pelican markdown flask_cors leo 。 \n 9.到 舊data  資料夾裡找到\xa0 home_mdecourse  資料夾，複製  gitconfig  檔到新的 cd2020>data>home  。 \n Assignment 1 (亂數分組&四輪車) 10.到  cd2020>data>tmp>cmsimde\xa0 git clone\xa0 \xa0   https://github.com/mdecourse/cmsimde/tree/1bde70afb50b33d5420953ce4a728fbc2027a1b9\xa0  ，將 clone\xa0 下來的 cmsimde裡所有東西複製到外面的cmsimde裡 ，然後開起個人網站近端 \n 11.拍攝影片 \n PDF :\xa0\xa0 Assignment 1 (可攜系統) \n PDF :\xa0 Assignment 1 (亂數分組&四輪車) \n 影片 :\xa0 https://youtu.be/2Fwmdud62oQ \n \n week4\xa0 自主學習 \n 自主學習跟上前三週進度 \n \n week5\xa0 個人進度簡報 \n 簡報影片 :\xa0 https://youtu.be/wVzOT6hHxpE \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'Week6-10', 'text': 'week6\xa0 利用OBS錄製影片 \n 1.下載windows版的obs並安裝 \n 2.開啟後可自行設定錄影快捷鍵 \n 3.新增顯示器畫面錄製電腦螢幕 \n \n 4.新增視訊畫面錄製個人畫面 \n \n 5.即可開始錄製影片 \n 下載網址:\xa0 https://obsproject.com/ \n \n \n \n 如何利用OBS與Youtube進行直播串流 \n 1.進到youtube開始直播，設定好相關資訊後會產生串流金鑰 \n \n 2.接著開啟obs點右下角的開始串流，或者是進入設定找到串流介面 \n \n 3.進到串流設定介面之後，要把服務位址改成youtube，然後複製youtube直播設定介面產生的串流金鑰，貼上至obs的串流金鑰裡 \n \n 4.完成串流金鑰設定之後即可點擊youtube右上角開始直播 \n \n \n \n \n \n week6\xa0 Assignment 2\xa0MechanicalDesignProcess (第二章翻譯) \n Topic 1 第二章翻譯 :\xa0 Assignment2 MechanicalDesignProcess (Topic 1第二章) \n Topic 0 & Topic 1 統整 :\xa0 Assignment 2 Topic 0 & Topic 1 統整 \n \n \n \n week7\xa0 \xa0Youtobe串流OBS直播 (線上課程) \n 直播影片網址 :\xa0 https://youtu.be/5yajC_LSh7s \n 本週利用youtube配合obs進行直播線上課程教學，所有組員利用觀看老師直播進行課程，各組組長則是利用meet與老師進行直播。 \n 每個學員於本週都須學會如何利用youtube進行直播並配合obs串流，在直播同時錄製直播影片。 \n \n \n \n week8\xa0 \xa0vrep更新&廣用網域預先安裝\xa0(線上課程) \n vrep更新 :\xa0 \n 1.到 https://mde.tw/cd2020pj1/content/RemoteAPI.html \xa0下載\xa0\xa0 CoppeliaSim_4_Self_Driving_Car_Simulation.7z \xa0並解壓縮至隨身碟 \n 2.到 https://mde.tw/cd2020pj1/content/CoppeliaSim.html \xa0下載\xa0  CoppeliaSim_Edu_V4_0_0_Win.zip \xa0同樣解壓縮至隨身碟 \n 3.完成後到\xa0CoppeliaSim_Edu_V4_0_0_Win 資料夾找到\xa0 coppeliaSim.exe  此為新版vrep \n 4.開啟 coppeliaSim.exe \xa0後利用 open scenes 找到\xa0remoteApiCommandServerExample 開啟進行操作，利用旁邊的veches 抓出任一台車來利用上下左右鍵即可操控車子 \n 5.利用SciTE開啟\xa0CoppeliaSim_4_Self_Driving_Car_Simulation 資料夾裡的\xa0car_model.py 檔並按開始即可進行車子的線上操控 \n 廣用網域預先安裝 : \n 1.利用已更新的py382指令框分別輸入\xa0pip install opencv-python\xa0 /\xa0\xa0pip install imutils\xa0 /\xa0\xa0pip install numpy\xa0 \xa0進行安裝 \n 安裝上述三個模組是為了將來可用每組某一位同學的電腦作為基地台分享網域給各組組員 \n 操作影片 :\xa0 https://youtu.be/pPjeOBJCuDs \n \n \n week8\xa0 \xa0各組開設meet串流 (線上課程) \n 各組長開啟一meet串流後邀請各組員進入，進行各組直播串流。每組被抽到的兩位組員分享各自電腦螢幕畫面操作本週課堂上所教內容，其他組員透過觀看兩位被抽到組員的直播操作複習本週上課內容。 \n group4 : 40723204\xa0 \xa040723232 \n meet直播操作影片 :\xa0 https://youtu.be/9avBO7tY8MI \n \n \n week9\xa0 \xa0 期中考 (線上課程) \n 每位學員利用google meeting\xa0 進行直播簡報一到九週所作內容，並於課堂直播同時錄製直播簡報影片，並放置個人學校雲端開啟共享使@gm信箱都擁有權限可觀看影片，並將影片連結丟至自評表單 \n 影片 :\xa0 https://drive.google.com/open?id=1lXrvxNOTANrAKysBOVpMKzhhk-XRpwyn \n \n week10\xa0 \xa0 設定個人ouath_gm \n 1.登錄學校的個人gm信箱，到 \xa0 https://console.developers.google.com \xa0網站，進去後點選台灣然後同意 \n 2.點選建立專案，自行設定專案名稱，完成後到\xa0 https://github.com/mdecourse/cd2020pj1 \xa0 git clone\xa0 cd2020pj1倉儲，放在個人tmp下 \n 3.回到api設定頁面，點選 啟用api和服務，選擇 google+ domains api按啟用，點選憑證然後設定同意畫面，點選內部建立，自行設定應用程式名稱後儲存，完成後再次點選憑證然後建立憑證oauth用戶端id，點選網頁應用程式後建立，產生的id跟密碼要儲存在scsc上，存為oauth_s個人學號.txt \n 4.點選網路用戶端1設定來源跟導向的url，來源設定為\xa0 https://localhost:8443，導向設定為\xa0  https://localhost:8443/login/google/ \xa0， \n 5.完成後開啟leo，開啟cd2020pj1的leo，點選@path./下@edit config.py，將key file的open都改成剛剛儲存的個人 oauth_s個人學號.txt ，儲存後要點一下drawroc \n 6.開啟編輯器打入 pip install authomaticauthomatic(這裡記得要用py382的編輯器)，完成後進入cd2020pj1後打 python wegi.py，確認可以開啟8443就完成了 \n 操作影片 :\xa0 \n \n', 'tags': '', 'url': 'Week6-10.html'}, {'title': 'Week11-15', 'text': '', 'tags': '', 'url': 'Week11-15.html'}, {'title': 'Week16-18', 'text': '', 'tags': '', 'url': 'Week16-18.html'}, {'title': 'About', 'text': 'cd2020 group4\xa0 \n Repository:\xa0 40623115 \xa0 | Site: \xa0 40623115 Repository: \xa0 40623144 \xa0 | Site: \xa0 40623144 Repository: \xa0 40623251 \xa0 | Site: \xa0 40623251 Repository: \xa0 40723204 \xa0 | Site: \xa0 40723204 Repository: \xa0 40723210 \xa0 | Site: \xa0 40723210 \xa0 (group leader) Repository: \xa0 40723212 \xa0 | Site: \xa0 40723212 Repository: \xa0 40723225 \xa0 | Site: \xa0 40723225 Repository: \xa0 40723232 \xa0 | Site: \xa0 40723232 Repository: \xa0 40723234 \xa0 | Site: \xa0 40723234 Repository: \xa0 40723238 \xa0 | Site: \xa0 40723238 Repository: \xa0 40723245 \xa0 | Site: \xa0 40723245 Repository: \xa0 40723250 \xa0 | Site: \xa0 40723250 \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git', 'tags': '', 'url': 'About.html'}]};