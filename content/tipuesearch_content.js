var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'As long as there is an internet connection and a computer, you will not be lonely [ 1 ,  2 ], and will not fall behind [ 1 ,  2 ,  3 ,  4 ,  5 ]! \n 學而不思則罔, 思而不學則殆! \n C-K theory:  1 ,  2 ,  3 ,  4 \n \n 機械設計工程系暨精密機械工程科 2019 Spring 網際內容管理課程 (Introduction to Web Content Management Systems Site Development) \n 倉儲:\xa0 https://github.com/mdecourse/wcm2019 \n 靜態網頁:  https://mde.tw/wcm2019 \xa0 \n 動態網頁:  https://wcm2019.herokuapp.com \xa0 \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n \n 107學年教育目標: \n 本課程延續五專部計算機概論與四技部計算機程式之教學內容, 探討網際內容管理系統 -  CMSimfly \xa0 之使用及後續應用. \n 107-2學期教育目標: \n 從 Intel-based 電腦硬體的組裝、安裝操作系統、配置網路連線到設定  CMSimfly \xa0, 引導學員學習如何運用電腦與網路系統, 自行架構符合機械協同設計流程使用之網際內容管理伺服系統. \n 達成學期教育目標之評量方式與標準: \n 評分比例: \n 學員出席 (20%) \n 電腦組裝與操作系統安裝 (10%) \n 網路連線配置與設定\xa0 (10%) \n Github 倉儲與 CMSimfly 配置 (30%) \n CMSimfly 操作 (20%) \n CMSimfly 開發 (10%) \n 評分方式: \n 學員自我評量 \xa0(30%) \n 分組自我評量 (30%) \n 倉儲歷程查驗 (40%) \n 教學方式: \n 課堂講授 \n 操作錄影 \n 學員實習 \n 分組報告', 'tags': '', 'url': 'Introduction.html'}, {'title': 'P-Tech', 'text': 'Pathways in Technology Early College High school (技術導向早期學院高中) \n 從\xa0 http://www.ptech.org/about/history/ \xa0可以看出, 促成此一以技術教育為導向的早期學院高中, 共有兩項主因. \n \n 職場需要高中以上學歷的技術人員 \n 在美國上大學的費用極高, 每年花費從\xa0 12320 - 48510 美元 (每年花費約台幣 37 萬至 150 萬) \n \n (來源: https://trends.collegeboard.org/college-pricing/figures-tables/average-published-undergraduate-charges-sector-2018-19 ) \n 因此, IBM 才與紐約地區的公立高中合作, 從 Grade 9 (國中三年級) 到 Grade 14 (大學二年級), 安排由高中、大學與企業等三方提供師資, 規劃六年課程, 縮減原先高中的課程, 允許學生到鄰近科技大學選修特定課程, 且在最後大學兩年免學費外, 還安排至企業實習,\xa0 畢業後取得高中學歷與副學士學位, 可優先進入合作企業的公司工作. \n P-Tech 學程 Q&A \n https://www.ptechnyc.org/domain/31 \xa0', 'tags': '', 'url': 'P-Tech.html'}, {'title': '計算機程式', 'text': 'Solvespace  以 C++ 編寫, 是一套 CAD單機程式套件. \n Jsketcher  以 Javascript 編寫, 是一套的網際前端 (Front-end) CAD 程式套件. \n Range Software3  以 C++ 編寫, 是一套 CAE 單機程式套件. \n 而根據 這裡 的說明, 一個典型的電腦輔助機械設計套件包含: \n The major components for a parametric system are: \n Geometry kernel (幾何運算核心). This component actually performs operations on objects. Points, curves, surfaces, bodies, and other types of objects. Examples include: Parasolid, ACIS, Granite. \n Constraint solver (約束求解器). This component manages and solves the various parameters, constraints, limits present in the mode. D-Cubed is an example of one of these. \n Data schema (數據模式表示法). How are things represented? What goes into a CAD file? This component is all about how the model is represented, communicated, stored. \n User Interface (使用者介面). Here, the user is give a way to create, and edit objects, entities, sketches, equations, constraints and more. \n Tessellator (曲面細分處理器). This component prepares models for graphical representation. The model gets a second representation as triangles a GPU can use to make images of the model for the user. \n Renderer (著色渲染器). Uses data from the tessellator. Will also build lots of stuff, like pick lists. This component manages the display and works closely with the user interface. \n Programming API (程式延伸介面). Instead of a user doing the work, a program can. \n Data Products (其他數據產品, 例如: 常用機械零組件). Many given pieces of information are often part of the CAD system. Materials, fasteners and more are supplied for the user to work with and often save time as they do not need to input these details. \n Translators (零件格式轉檔器), filters. A component that can either take foreign CAD data and transform it into native, or native to foreign. Examples would be STEP, DXF, STL \n There are many more components present in most CAD systems. These are major components necessary for a CAD system to be useful and productive. \n 上列描述的只是 MCAD (Mechanical Computer Aided Design) 套件的一小部分, 電腦輔助機械設計除了基本零組件的 2D/3D 外型繪製與組立外, 還有 2D/3D 機構的模擬分析與合成 (例如:  SAM  與  Pyslvs ), 還有進行強度分析的各種 CAE, 以及 CAM, 可見與機械設計相關的程式設計, 並沒有想像中單純, 而這些分析與模擬套件, 還未納入與控制系統設計相關的軟體. \n 因此, 想要單單以一門計算機程式, 來培養有能力開發電腦程式進行機械設計, 是遠遠不夠, 更別提在目前網路通訊及多核運算晶片的快速發展下, 電腦軟硬體的整合發展已經逐步將單機執行的軟體套件, 帶往能夠多人即時協同的網際程式環境, 此一發展更大大提高初學者的進入門檻. \n 機械計算機程式設計 \n 從許多 CAD/E/M 都是利用 C++ 編寫的角度來看, 計算機程式教學從 C++ 入手似乎是個不錯的開始, 只是 C++ 程式需要編譯, 使用上較為繁瑣, 而且若從 Windows 10 的開發環境中學習 C++, 在不使用 Visual Studio 的前提下 (Why? tl;dr, 因為可以使用更簡便的  MSYS2  環境). \n 相對較好的建議是從 Python 及 Lua 入手,\xa0 使用 Python 結合\xa0 https://github.com/mottosso/Qt.py \xa0網羅 Github 現有的許多 PyQt4, PyQt5 或 Pyside2 的程式, 用來建立單機介面, 然後在編寫機械相關運算核心程式庫的同時, 設法利用  cython ,\xa0 熟悉 Python 與 C/C++ 之間的關係, 當然最佳情況下, 可以快速以 Python 編寫  cython  碼, 然後再設法編譯為 C/C++ 程式碼後編譯成動態程式庫, 由 GUI介面呼叫使用. \n 當然, 長遠來看\xa0 https://www.engineering.com/DesignSoftware/DesignSoftwareArticles/ArticleID/16985/First-Look-Onshape-Enterprise.aspx \xa0 勢必主宰全球機械協同設計流程, 只是經由各種老舊技術設計的產品及流程, 或許仍會永遠存在.\xa0 不同階段踏出社會的機械設計工程師們, 仍舊必須不斷面對挑戰, 然後做出決定: 到底是停在當下, 還是繼續跟著浪潮走. \n 停在當下, 可能面臨淘汰 \n 而想跟著浪潮走, 茫茫大海, 哪裡才是方向? \n 從  SQLite  與  Fossil SCM  的開發歷程來看, 在計算機程式領域, 能夠給機械設計工程師最好的建議是: \n 眼光要放遠, 但是要確定腳是踏在堅實的地上. \n 單機程式 \n https://build-system.fman.io/pyqt5-tutorial \xa0 \n 網際程式 \n https://www.codefellows.org/courses/code-101/intro-to-software-development-and-careers-in-tech/ \xa0 \n https://www.codefellows.org/courses/code-201/foundations-of-software-development/ \xa0 \n https://www.codefellows.org/courses/code-301/intermediate-software-development/ \xa0 \n https://www.codefellows.org/courses/code-401/advanced-software-development-in-python/ \xa0 \n Gear Sketch:\xa0 http://mde.tw/2017springcd/GearSketch/index.html \xa0 \n', 'tags': '', 'url': '計算機程式.html'}, {'title': '全球協同', 'text': '網路的普及促成全球協同, 分散式版次管理工具(例如:  Git 、 Mercurial 、 Fossil SCM  等)則提供協同者明確清楚的運作模式, 至於  Github  與  Gitlab  等分散式版次伺服代管服務系統, 更大幅催化各種程式系統的開發速度. \n 網路 - 連接全球客戶端與伺服器端電腦 \n 分散式版次管理工具 - 提供明確清楚展示改版歷程的運作模式與流程 \n Github - 分散式版次代管服務系統 \n 電腦程式開發 - 在  Github  全球協同架構下, 許多知名電腦軟體套件正快速發展中 \n Reveal 網際簡報系統 \n https://github.com/hakimel/reveal.js/ \xa0 \n Pelican 靜態網誌建構系統 \n https://github.com/getpelican/pelican \xa0 \n Leo Editor 多元資料管理系統 \n https://github.com/leo-editor/leo-editor \xa0 \n', 'tags': '', 'url': '全球協同.html'}, {'title': '實習任務', 'text': '學習要點 \n 本學期的課程將從\xa0 https://www.blogger.com \xa0的個人動態網誌建立與維護開始, 讓使用者可以隨時利用瀏覽器, 維護個人網誌內容. \n 接著再由 Github 帳號的建立, 逐步透過 Github Pages 靜態網頁的建立, 讓使用者體會如何在多人協同的環境中, 共同維護網際內容. \n 實習任務一 \n \n 請登入學校配發的 Gmail 帳號, 連結至\xa0 https://www.blogger.com , 建立屬於個人的動態網誌系統. \n 請在登入 Gmail 帳號後, 連結至\xa0 https://github.com/ \xa0, 以學號建立個人帳號, 接下來學習如何在此一 Github 帳號下,\xa0 參考  html5_tutorial.pdf \xa0( html5 中文簡體文件 ),\xa0建立個人的  Github Pages \n \n 實習問題: \n \n 何謂瀏覽器 ( Web Browser )? \n 何謂網際伺服器 ( Web Server )? \n 何謂超文件 ( Hypertext )? \n 何謂超文件傳輸協定 ( HTTP )? \n 如何利用個人的 Github 帳號, 建立個人的 靜態網站 ? (提示: 透過 Github - Settings - Github Pages - Source 指定要使用的倉儲分支) \n 如何收集各班各學員的個人動態網誌連結, 呈現在個人的  Github 靜態網站 上? (提示: 透過\xa0 https://ethercalc.net/ \xa0) \n (五專部)  P-Tech  還沒有中文頁面, 誰來幫它建立中文頁面, 同時納入台灣國立科大重啟五專招生的相關訊息? ( IBM P-Tech info ,  pdf ),  台灣重啟五專新聞.pdf \n \n Pathways in Technology Early College High School (技術導向早期學院高中):\xa0 http://www.ptech.org/ \xa0 \n 相關術語: \n Wikipedia -\xa0 https://en.wikipedia.org/wiki/Wikipedia \xa0 \n Junior College:\xa0 https://en.wikipedia.org/wiki/Junior_college \xa0 \n Middle College Program:\xa0 https://en.wikipedia.org/wiki/Middle_College_Program \xa0 \n Early College High School:\xa0 https://en.wikipedia.org/wiki/Early_college_high_school \xa0 \n Gmail 帳號 -\xa0 https://en.wikipedia.org/wiki/Gmail \xa0 \n Blogger -\xa0 https://en.wikipedia.org/wiki/Blogger_(service) \xa0 \n 網誌 (blog) -\xa0 https://en.wikipedia.org/wiki/Blog \xa0 \n 靜態網頁-\xa0 https://en.wikipedia.org/wiki/Static_web_page \xa0 \n 動態網頁 -\xa0 https://en.wikipedia.org/wiki/Dynamic_web_page \xa0 \n Github 帳號 -\xa0 https://en.wikipedia.org/wiki/GitHub \xa0 \n Github 靜態網站 -\xa0 https://pages.github.com/ \xa0 \n 參考資料: \n 以 disk1 在 Goodkym 達康建立的\xa0 https://2019wcm.blogspot.com/ \xa0 \n HTML5 Solutions: Essential Techniques for HTML5 Developers (2011) \n https://link.springer.com/book/10.1007/978-1-4302-3387-9 \xa0 \n The Definitive Guide to HTML5 WebSocket (2013) \n https://link.springer.com/book/10.1007/978-1-4302-4741-8 \xa0 \n Essential HTML fast (1998) \n https://link.springer.com/book/10.1007/978-1-4471-1541-0 \xa0 \n Beginning Node.js (2014) \n https://link.springer.com/book/10.1007/978-1-4842-0187-9 \xa0 \n Beginning Functional JavaScript (2018) \n https://link.springer.com/book/10.1007/978-1-4842-4087-8 \xa0 \n 學習評量 \n \n 請各學員在完成本實習任務後, 嘗試利用\xa0\xa0 https://getsharex.com/ \xa0錄製具備影音內容的學習心得影片, 以「國立虎尾科技大學-機械設計工程系 (or 精密機械工程科) - 網際內容管理 - 學號 - 實習任務一學習心得」作為標題, 並且上傳到個人的\xa0 https://www.youtube.com/ \xa0帳號區. \n 請各學員分別在全體學員上傳心得影片後, 選出個人認為內容說明最為詳實的影片 (How?). \n', 'tags': '', 'url': '實習任務.html'}, {'title': '實習項目二', 'text': '導入可攜程式環境 \n 自行建立 Windows 10 環境下的 ANSI C 與 Python 3.7.2 程式環境 \n 啟動與關閉\xa0 - 利用  subst \xa0指令簡化  path  設定流程 \n ANSI C - 採用\xa0 http://download.savannah.gnu.org/releases/tinycc/ \xa0 \n Python - Python 3.7.2 (原始安裝約 65 MB) \n SciTE -\xa0 https://www.scintilla.org/SciTE.html \xa0 \n Git - 採用\xa0 https://git-scm.com/ \xa0可攜版本 \n Python 模組 -  Flask ,  bs4 ,  pyqt5 ,  leo ,  pelican ,  lxml ,  markdown \n Flask, bs4 and lxml is for CMSimfly \n pyqt5 is for Leo Editor \n pelican, and markdown is for Pelican Blog \n 安裝上述模組後, p37 容量約 420 MB \n 下載  kmol_2019.z7 \n 下載  nodejs_with_ungit.7z \n Git 與 Github \n Git 教材:\xa0 https://git-scm.com/book/zh-tw/v2 \xa0 \n Github 教材:\xa0 https://lab.github.com/ \xa0 (已經以 scrum-1 帳號開始 學習流程 ) \n \n Nodejs  與  Ungit \n ungit 是一個網際 git 客戶端圖形化工具, 以 node.js 開發, 啟動時需要 git、node.js 與 npm. 將 ungit 製作成可攜系統, 必須下載 node.js 安裝後, 再安裝 ungit, 接著取下 c:\\program files\\nodejs 與 c:\\users\\用戶名稱\\AppData\\roaming\\npm 及 npm-cache 放入 nodejs 中的 appdata 目錄, 並將整個 nodejs 目錄放入可攜 data 目錄,\xa0 並設定命令列搜尋路徑: \n set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n 可攜系統即可透過指令進入 github 倉儲中, 以 ungit 進行圖形化操作. \n 此外, ungit 啟動程式碼中, 必須蓋掉擷取操作系統使用者的設定, 以便讓 ungit 導引 git 使用可攜系統 home 目錄中的 .gitconfig 設定. \n #!/bin/sh\nbasedir=$(dirname "$(echo "$0" | sed -e \'s,\\\\,/,g\')")\n\n# 必須關掉下列設定, 讓 ungit 可以導引 git 讀取 y:\\home 下的 .gitconfig 設定\n#case `uname` in\n    #*CYGWIN*) basedir=`cygpath -w "$basedir"`;;\n#esac\n\nif [ -x "$basedir/node" ]; then\n  "$basedir/node"  "$basedir/node_modules/ungit/bin/ungit" "$@"\n  ret=$?\nelse \n  node  "$basedir/node_modules/ungit/bin/ungit" "$@"\n  ret=$?\nfi\nexit $ret \n 利用 ungit 執行  cmstest 倉儲 改版提交與推送畫面: \n \n 在實際操作 ungit 過程, 由於在 Windows 10 環境會啟動 Edge 瀏覽器, 若要在啟動 ungit 時使用 Google Chrome 瀏覽器 (或其他瀏覽器), 必須使用下列指令: \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %U" \n 其中,\xa0 PROGRA~2 為 "Program Files (x86)" 的縮寫 (註:\xa0PROGRA~1 為 "Program Files" 的縮寫), 且 %U 為 ungit 啟動時對應倉儲目錄的 URL 資料. \n 因此上述指令意指, 啟動 ungit 時, 不要使用內建設定的 Edge 瀏覽器, 而是執行隨後的指令, 而該指令即透過縮寫的目錄名稱, 對應 "C:\\Program Files (x86)", 針對目前所在的倉儲目錄, 以 Google Chrome 瀏覽器開啟 ungit 的網際倉儲連結. \n 為了簡化上述指令的呼叫, 可以將上述指令改為:\xa0 \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %%U" \n 並以 SciTE 編輯器存入 Y:\\kungit.bat 批次檔案中, 當使用者以命令列進入特定倉儲時, 只要輸入 kungit 即可呼叫此一 ungit 指令執行. \n 上述以批次檔案執行的 %%U, 表示要在 Windows command 中列出 %U, 因為 "%" 符號在批次檔案中具有特定意義, 因此要在批次檔案中列出 "%", 必須使用 "%%", 其他相關詳細說明, 請參考\xa0 https://ss64.com/nt/syntax-esc.html \xa0', 'tags': '', 'url': '實習項目二.html'}, {'title': 'Blogger API', 'text': 'Blogger:  https://www.blogger.com \n https://developers.google.com/blogger/ \n https://pypi.org/project/google-api-python-client/ \n https://developers.google.com/resources/api-libraries/documentation/blogger/v3/python/latest/ \n https://developers.google.com/api-client-library/python/ \n https://developers.google.com/apis-explorer/ \n https://developers.google.com/blogger/docs/3.0/using \n https://developers.google.com/blogger/docs/3.0/reference/ \n https://stackoverflow.com/questions/48527480/insert-a-draft-blog-post-using-blogger-api-v3-with-python \n https://github.com/googleapis/google-api-python-client/blob/master/samples/blogger/blogger.py \n http://www.easonhsu.idv.tw/2017/01/use-blogger-python-api-to-publish-from.html \n https://pypi.org/project/EasyBlogger/  ', 'tags': '', 'url': 'Blogger API.html'}, {'title': '實習項目三', 'text': '利用 Html5 建立 Github Pages 上的個人網站 \n HTML5 Solutions: Essential Techniques for HTML5 Developers \n https://link.springer.com/book/10.1007/978-1-4302-3387-9 \n', 'tags': '', 'url': '實習項目三.html'}, {'title': '實習項目四', 'text': '多人共同維護 Github Pages 內容, 導入 CMSimfly \n 將 CMSimfly 部署到 Github Pages 與 Heroku', 'tags': '', 'url': '實習項目四.html'}, {'title': '實習項目五', 'text': '以 Leo Editor 管理 Reveal (協同簡報) 與 Pelican blog (協同網誌) \n 多人協同 CMSimfly\xa0 - 利用 Leo Editor 解讀無法自動合併的 content.htm \n \n', 'tags': '', 'url': '實習項目五.html'}, {'title': '分組專題', 'text': 'CMSimfly \n CMSimfly 中有不少 Bugs\xa0 (或功能改進之處): \n \n 在某些情況下會刪除使用者的 content.htm, 只留下內建單一頁面的內容 \n 在某些情況下無法解讀使用者希望置入的內容, 而導致錯誤 \n 動態網頁與靜態網頁無 template 配置設計 \n 非同步多人維護 content.htm 時, 能夠改進檔案的合併 \n 能否提供一個更容易使用的 reveal 編輯環境 \n 能否提供一個更容易使用的 pelican blog 編輯環境 \n \n 配置內容管理系統 \n 如何建立一台電腦伺服器, 配置 CMSimfly? \n 網路配置 \n 如何善用網路頻寬, 改善電腦輔助設計室的網路配置? 如何繪製並維護網路配置圖? \n 個人電腦使用模式 \n 如何根據學校與系上所提供的各種軟硬體, 替每一成員找出最佳的個人電腦使用模式? 購買桌上型電腦? 何種規格? 購買筆記型電腦? 何種規格? 如何配置管理個人使用範圍的電腦相關軟硬體?', 'tags': '', 'url': '分組專題.html'}, {'title': '電腦安裝', 'text': '電腦硬體 \n computer overview and hardware.pdf \n ( https://www.cs.auckland.ac.nz/compsci111ssc/lectures/LectureSlides/ ) \n Computer 硬體 \n \n Personal Computer 類別 \n \n 機架式(rack)電腦伺服器 \n \n UPS (Uninterruptible Power Supply) 不斷電系統 \n \n Motherboard 主機板 \n \n PCI ( Peripheral Component Interconnect) 網路卡 \n \n Power Supply 電源供應器 \n \n 個人桌上型電腦內部 \n \n 筆記型電腦內部 \n \n 操作系統 \n Windows 10 \n https://www.microsoft.com/zh-tw/software-download/windows10 \xa0 \n Ubuntu \n https://www.ubuntu.com/download \xa0 \n Virtualbox \n https://www.virtualbox.org/ \xa0', 'tags': '', 'url': '電腦安裝.html'}, {'title': '建立伺服器', 'text': 'Windows Server \n 學習如何建立 Windows 伺服器 \n Ubuntu Server \n 學習如何建立 Ubuntu 伺服器', 'tags': '', 'url': '建立伺服器.html'}, {'title': '網路配置', 'text': '網路連線 \n 實體連線 \n https://en.wikipedia.org/wiki/Category_6_cable \xa0 \n 無線網路 \n https://en.wikipedia.org/wiki/Wi-Fi \xa0 \n 網路設定 \n TCP \n https://en.wikipedia.org/wiki/Transmission_Control_Protocol \xa0 \n IP \n https://en.wikipedia.org/wiki/Internet_Protocol \xa0 \n \n 機械設計網路架構 \n IP addresses \n DNS Servers \n Proxy Servers \n 網路線配置', 'tags': '', 'url': '網路配置.html'}, {'title': 'Proxy Server', 'text': 'Squid 設定檔案 \n acl cad_lab src 140.130.17.0/24\nacl cad_lab src 2001:288:6004:17::/64\n \nacl SSL_ports port 443\nacl Safe_ports port 80 # http\nacl Safe_ports port 88\n \n#acl Safe_ports port 21 # ftp\nacl SSL_ports port 8443\nacl Safe_ports port 8443\n \nacl SSL_ports port 9443\nacl Safe_ports port 9443\n \nacl SSL_ports port 22\nacl Safe_ports port 22\n \nacl Safe_ports port 443 # https\nacl Safe_ports port 1025-65535 # unregistered ports\nacl Safe_ports port 280 # http-mgmt\nacl Safe_ports port 488 # gss-http\nacl Safe_ports port 591 # filemaker\nacl Safe_ports port 777 # multiling http\nacl CONNECT method CONNECT\n \n# Deny requests to certain unsafe ports\nhttp_access deny !Safe_ports\n \n# Deny CONNECT to other than secure SSL ports\nhttp_access deny CONNECT !SSL_ports\n \nhttp_access allow cad_lab\nhttp_access deny all\n# Only allow cachemgr access from localhost\nhttp_access allow localhost manager\nhttp_access deny manager\n \n#http_access allow localnet\nhttp_access allow localhost\n \n# And finally deny all other access to this proxy\nhttp_access deny all\n \n# Squid normally listens to port 3128\nhttp_port 3128\n \n#cache_dir ufs /var/spool/squid3 100 16 256\nicp_port 3130\nicp_access allow all\n \ncache_dir ufs /var/spool/squid3 2000 16 256\ncache_peer 140.130.17.2 sibling 3128 3130\ncache_peer 140.130.17.4 sibling 3128 3130\ncache_peer 140.130.17.9 sibling 3128 3130\ncache_peer 140.130.17.22 sibling 3128 3130\ncache_peer 140.130.17.23 sibling 3128 3130\n \n#\n# Add any of your own refresh_pattern entries above these.\n#\nrefresh_pattern ^ftp: 1440 20% 10080\nrefresh_pattern ^gopher: 1440 0% 1440\nrefresh_pattern -i (/cgi-bin/|\\?) 0 0% 0\nrefresh_pattern (Release|Packages(.gz)*)$ 0 20% 2880\nrefresh_pattern . 0 20% 4320 \n', 'tags': '', 'url': 'Proxy Server.html'}, {'title': '程式開發環境', 'text': '可攜 Python 系統:\xa0 p37-18.12.7z \xa0(下載解開壓縮檔案後, 以 start.bat 啟動後即可使用)\xa0 \n 啟動批次檔案 \n start.bat \n @echo off\nREM 設定 y 硬碟代號與 data 目錄對應\nset Disk=y\nsubst %Disk%: "data"\nREM 設定 leo 相關對應 Home 位置\nset HomePath=%Disk%:\\home_cadlab\nset HomeDrive=%Disk%:\\home_cadlab\nset Home=%Disk%:\\home_cadlab\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\nREM 將後續的指令執行, 以 %Disk% 為主\n%Disk%:\nREM 設定 PYTHONPATH\nset PYTHONPATH=%Disk%:\\p37\\DLLs;%Disk%:\\p37\\Lib;%Disk%:\\p37\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\p37\nREM for Qt and Qt Creator\nset LLVM_INSTALL_DIR=%Disk%:\\LLVM;\nset QBS_INSTALL_DIR=%Disk%:\\qbs-windows-x86_64-1.10.0;\nREM for TCL\nset TCL_LIBRARY=%Disk%:\\p37\\tcl\\tcl8.6\nset TK_LIBRARY=%Disk%:\\p37\\tcl\\tcl8.6\nREM 設定 Leo 所用的編輯器\nset LEO_EDITOR=%Disk%:\\scite\\bin\\Sc1.exe;\nset BOOST_ROOT=%Disk%:\\boost_1_66_0\\;\nREM set CMAKE_PREFIX_PATH=%Disk%:\\msys64\\mingw64\\\nREM for fossil https 連線設定\nREM 若在近端使用 fossil ui 則要蓋掉\nREM set HTTPS=on\nREM 指令搜尋路徑設定\nREM set path1=%PATH%;%Disk%:;%Disk%:\\p37;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\p37\\Scripts;%Disk%:\\Git\\bin;%Disk%:\\vrep331;\nREM path1 is base of this portable Python3.6 system\nset path1=%Disk%:;%Disk%:\\p37;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\p37\\Scripts;%Disk%:\\Git\\bin;%Disk%:\\vrep331;%Disk%:\\p37\\Lib\\site-packages\\PyQt5\\Qt\\bin;\nREM path2 is for pandoc and miktex\nset path2=%Disk%:\\pandoc-2.0.2;%Disk%:\\miktex_portable\\texmfs\\install\\miktex\\bin;%Disk%:\\lua-5.3.4\\bin;%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\qtcreator-4.7.0-rc1\\bin;%Disk%:\\patch-2.5.9-7-bin\\bin;\nREM path3 is for gcc development \nset path3=%Disk%:\\msys64\\mingw64\\bin;%Disk%:\\swigwin-3.0.12;%Disk%:\\cmake-3.10.1-win64-x64\\bin;%Disk%:\\diffutils-2.8.7-1\\bin;%Disk%:\\patch-2.5.9-7\\bin;%Disk%:\\graphviz-2.38\\bin;\nset path4=%Disk%:\\boost_1_66_0\\;%Disk%:\\Strawberry\\perl\\bin;%D%:\\jom_1_1_2;%Disk%:\\LLVM\\bin;%Disk%:\\QtCreator\\bin;%Disk%:\\vrep340_rev1;%Disk%:\\p37\\tcl\\tcl8.6;%Disk%:\\xsltproc;\nset path5=%Disk%:\\ffmpeg-20180504-dc7a8f7-win64-static\\bin;%Disk%:\\oce-0.18.1\\bin\\;%Disk%:\\oce-0.18.1\\lib\\;%Disk%:\\gnuplot\\bin;\nset JAVA_HOME=%Disk%:\\Java\\jdk1.8.0_172;\nset ANDROID_HOME=%Disk%:\\Android\\sdk;\nset path6=%Disk%:\\Java\\jdk1.8.0_172\\bin;%Disk%:\\Java\\jre1.8.0_172\\bin;%Disk%:\\Android\\AndroidStudio\\bin;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\BIND9.12.2-P2.x64;%Disk%:\\heroku\\bin;\nset path7=%Disk%:\\pandoc-2.4-windows-x86_64;%Disk%:\\miktex_portable\\texmfs\\install\\miktex\\bin;%Disk%:\\wget-1.11.4-1-bin\\bin;%Disk%:\\openssl-0.9.8h-1-bin\\bin;\nREM for Pythonocc under MSYS2 according to https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!msg/pythonocc/z-NI9A-Vyic/8QjD81q-AwAJ\nset CSF_GraphicShr=%Disk%:\\oce-0.18.1\\bin\\TKOpenGl.dll\npath=%path%;%path1%;%path2%;%path3%;%path4%;%path5%;%path6%;%path7%;%Disk%:\\p37\\site-packages\\scipy\\extra_dll;%Disk%:\\scite\\bin;\nstart /MIN %Disk%:\\scite\\bin\\Sc1.exe\nstart /MIN %Disk%:\\scite\\bin\\Sc1.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nREM start /MIN cmd.exe /k "y:\\cp2018.bat"\nREM start /MIN cmd.exe /k "y:\\cp2018_http_server.bat\nREM start /MIN cmd.exe /k "y:\\cadp2018.bat"\nREM 啟動 Leo 編輯器\n%Disk%:\\p37\\python.exe %Disk%:\\launchLeo.py\nREM 啟動 stunnel\nREM start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\nREM start /MIN stunnel.exe\nREM start qtcreator\nExit \n stop.bat \n @echo off\nset Disk=y\nREM 關閉 SciTE\ntaskkill /IM Sc1.exe /F\nREM 關閉 python\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\nREM 關閉 stunnel\ntaskkill /IM stunnel.exe /F\nREM 關閉 fossil\ntaskkill /IM fossil.exe /F\nrem taskkill /IM sharex.exe /F\nREM 清除 log 資料\npath=%PATH%;\nREM del /Q /F  V:\\tmp\\*.*\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\nREM taskkill /IM mingw32 /F\nEXIT \n SciTE \n https://www.scintilla.org/SciTE.html \xa0 \n Git \n https://git-scm.com/download/win \xa0 \n Heroku cli \n heroku_kmol.7z \n Python \n https://www.python.org/ \xa0 \n Leo Editor \n http://leoeditor.com/ \xa0', 'tags': '', 'url': '程式開發環境.html'}, {'title': 'Windows 10', 'text': 'Windows 批次檔 \n ref1.pdf \n ref2.pdf \n ref3.pdf \n Git \n https://git-scm.com/book/zh-tw/v2 \xa0 \n Python 程式環境 \n Learn to Program with Python 3 - A Step-by-Step Guide to Programming \n https://link.springer.com/book/10.1007/978-1-4842-3879-0 \xa0 \n Beginning Python - From Novice to Professional \n https://link.springer.com/book/10.1007/978-1-4842-0028-5 \xa0 \n Programming with Python \n https://link.springer.com/book/10.1007/978-981-10-3277-6 \xa0 \n Python Recipes Handbook - A Problem-Solution Approach \n https://link.springer.com/book/10.1007/978-1-4842-0241-8 \xa0 \n Python 2 and 3 Compatibility - With Six and Python-Future Libraries \n https://link.springer.com/book/10.1007/978-1-4842-2955-2 \xa0 \n Flask 網際框架 \n Framework (框架)\xa0 - 預先配置使用方法、模組與標準化架構的程式組合,\xa0 讓開發者可以快速完成特定工作. \n Flask 則屬於建構網站用之伺服器後端 (Back-end) 的 Python 程式框架 \n 另外有包含  CSS  與 Javascript, 屬於建構網站用之前端 (Front-end) 程式框架, 例如:  Jquery . \n http://flask.pocoo.org/ \xa0 \n Leo Editor 管理系統 \n http://leoeditor.com/ \xa0', 'tags': '', 'url': 'Windows 10.html'}, {'title': 'Ubuntu', 'text': 'Git \n sudo apt install git \n Python 程式環境 \n https://pythonclock.org/ \xa0 \n Flask 網際框架 \n sudo pip install flask \n Leo Editor 管理系統 \n sudo pip install leo \n', 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'CentOS', 'text': 'The Definitive Guide to CentOS \n https://link.springer.com/book/10.1007/978-1-4302-1931-6 \xa0 \n Foundations of CentOS Linux \n https://link.springer.com/book/10.1007/978-1-4302-1965-1 \xa0 \n Learn CentOS Linux Network Services \n https://link.springer.com/book/10.1007/978-1-4842-2379-6 \xa0 \n', 'tags': '', 'url': 'CentOS.html'}, {'title': 'CMSimfly 安裝', 'text': 'Windows 10 執行 (近端內容編輯) \n python wsgi.py \n Github \n 利用 Github Pages 伺服  CMSimfly  的靜態網頁系統 \n Heroku \n 利用 Python 執行  CMSimfly  的動態網頁系統 \n Ubuntu 自架主機 \n 採用  uwsgi  執行 \n', 'tags': '', 'url': 'CMSimfly 安裝.html'}, {'title': 'Github', 'text': 'https://github.com/chiamingyen/cmsimfly \xa0 \n 利用  Github Pages  伺服靜態網頁系統', 'tags': '', 'url': 'Github.html'}, {'title': 'Heroku', 'text': 'https://www.heroku.com/ \xa0 \n heroku_kmol.7z \xa0(Heroku Windows 10 64 位元可攜系統)', 'tags': '', 'url': 'Heroku.html'}, {'title': '自架主機', 'text': 'Ubuntu under Virtualbox \n', 'tags': '', 'url': '自架主機.html'}, {'title': 'CMSimfly 開發', 'text': '線上程式環境 \n Javascript \n https://www.javascript.com/ \xa0 \n Brython \n https://brython.info/ \u3000 \n Lua \n https://github.com/fengari-lua/fengari-web \xa0 \n templates \n http://flask.pocoo.org/docs/1.0/tutorial/templates/ \xa0 \n extensions \n http://flask.pocoo.org/extensions/ \xa0 \n', 'tags': '', 'url': 'CMSimfly 開發.html'}, {'title': 'Front-end', 'text': 'https://getbootstrap.com/ \xa0 \n Foundation Website Creation with CSS, XHTML, and JavaScript \n https://link.springer.com/content/pdf/10.1007%2F978-1-4302-0992-8.pdf \xa0 \n Pro HTML5 with CSS, JavaScript, and Multimedia \n https://link.springer.com/content/pdf/10.1007%2F978-1-4842-2463-2.pdf \xa0 \n Getting StartED with CSS \n https://link.springer.com/content/pdf/10.1007%2F978-1-4302-2544-7.pdf \xa0 \n CSS Mastery \n https://link.springer.com/content/pdf/10.1007%2F978-1-4302-5864-3.pdf \xa0 \n CSS Quick Syntax Reference Guide \n https://link.springer.com/content/pdf/10.1007%2F978-1-4302-6491-0.pdf \xa0 \n AdvancED CSS \n https://link.springer.com/content/pdf/10.1007%2F978-1-4302-1933-0.pdf \xa0 \n', 'tags': '', 'url': 'Front-end.html'}, {'title': '繪圖', 'text': '網路配置圖 \n http://cadlab.mde.tw/post/cadlab-ji-jie-she-ji-xi-wang-lu-pei-zhi-tu.html \xa0 \n', 'tags': '', 'url': '繪圖.html'}, {'title': '相關技術', 'text': '本課程中的網際內容管理, 是以機械設計相關應用作為出發點, 意即使用者的內容包含與機械設計相關的口語 (oral presentation)、文字 (text)、靜態繪圖 (2D graphics)、動態繪圖 (3D 與 animation)、影音資料 (mp4)與實作表達呈現相關的資料. \n 口語表達: 由設計者口說並輔以其他內容, 說明設計理念、流程與施作方法等. \n 文字表達: 利用文字編寫, 說明設計內容. \n 2D 內容表達: 利用 gif、png 、jpg 或 2D pdf 等表達流程、圖表或與設計有關的相關影像或工程圖內容. \n 3D 內容表達: 利用 X3d 、three.js 或 Onshape URL等類似技術, 表達與機械設計內容有關的零組件. \n 數學表達: 利用數學理論, 說明設計內容各組成之間的關聯. \n 影音資料: 可上傳到 Youtube, 與機械設計相關的影音檔案資料. \n 實作表達: 將上述各種表達所呈現的機械設計相關內容, 以實作方式進行表達, 其中除了呈現零組件實體模型與操作示範外, 還包括各種表達的詳細示範流程 (如何製作? 使用哪種工具? 有哪些考量? 過程中如何持續改進?.', 'tags': '', 'url': '相關技術.html'}, {'title': 'Pygrouf', 'text': 'https://github.com/chiamingyen/pygrouf \xa0 \n 改寫 Pygrouf 成為合用的網際同儕互評暨自評系統. \n 參考資料 \n https://teaching.berkeley.edu/resources/assessment-and-evaluation/design-assessment/rubrics \xa0 \n http://www.teach-nology.com/web_tools/rubrics/ \xa0 \n The Effects of Instructional Rubrics on Learning to Write.pdf \n https://github.com/ubc/iPeer \xa0 \n https://github.com/WebPA/WebPA \xa0 \n https://github.com/krstnschwpwr/peer_review_system \xa0 \n https://github.com/TEAMMATES/teammates \xa0 ( https://teammatesv4.appspot.com/ \xa0)', 'tags': '', 'url': 'Pygrouf.html'}, {'title': 'Konva', 'text': '直接利用 Konva 與 Javascript 繪圖 \n https://konvajs.github.io/ \xa0 \n What is Konva.JS for? \n Konva.JS is a JavaScript library used to work with HTML5 canvas. A canvas element is sort of what it sounds like...a place to draw stuff. Most of the time, web pages that create customizable images for you to download--memes, avatars, graphs, etc.--are using a canvas element. Unfortunately, doing anything beyond simple drawings on the canvas can be a royal pain in the rump. But fortunately, some highly skilled programmers have written libraries of JavaScript functions to do the hard parts for us. There are many such libraries for the canvas, and Konva.JS is probably the most popular. \n Source:\xa0 https://docs.google.com/presentation/d/1IOCbk5xL_QjPaM5DqybMWLKRZCV8kxAbqNWwDX7Rj5M/htmlpresent \xa0 \n Step 1: Load the Konva.JS library \n HTML \n <script src="https://cdn.rawgit.com/konvajs/konva/0.11.1/konva.min.js"></script> \n Konva.JS isn\'t part of native JavaScript. It\'s just a bunch of great JavaScript that somebody else already wrote, and we have to include it in our page before we can use it. We don\'t, however, have to copy and paste thousands of lines of their code into ours. Instead, we can just load a file that has those thousands of lines of code. There are several places that Konva.JS can be loaded from; I chose this particular URL simply because it\'s one of the few that survives the school\'s filters. \n Step 2: Create an empty HTML element to hold the canvas \n HTML \n <script src="https://cdn.rawgit.com/konvajs/konva/0.11.1/konva.min.js"></script> \n <div id=\'my-canvas\'></div> \n There doesn\'t need to be anything in the div, and it doesn\'t even necessarily have to be a div. But it does need an ID so that Konva\'s JavaScript can refer to it. \n Step 3: Create a stage to hold everything in your drawing \n JavaScript \n var stage = new Konva.Stage({ container: \'my-canvas\',  width: 400,  height: 200 }); \n Make sure you remember the new keyword. Konva.Stage is a special kind of function called a constructor (because it makes a new Stage object), and it won\'t work without the new. The parameter you pass to the constructor is an object, so use the right syntax for an object. The container key is the ID of the HTML element where your canvas will be. The stage doesn\'t have to be called "stage" (you\'re using the var keyword, so you can decide what to call it), but "stage" makes sense for simplicity. \n Step 4: Create a layer and add it to the stage \n JavaScript \n var stage = new Konva.Stage({ container: \'my-canvas\',  width: 400,  height: 200 }); \n var layer = new Konva.Layer(); stage.add(layer); \n You can create more than one layer if you want, though there probably won\'t be much reason to for your projects in this class. If you do create more layers, be sure to give them different names! Again, don\'t forget the new keyword when you create the layer. \n Step 5: Create shapes and add them to the layer \n var redRect = new Konva.Rect({ x: 20,  y: 50,  width: 100,  height: 100,  fill: \'red\' }); \n layer.add(redRect); \n x and y are the coordinates of the upper left corner of the rectangle. (0, 0) is the UPPER left corner of the stage, not the lower left. (0, 100) is 100 pixels BELOW the upper left corner. You can add as many shapes as you want in a layer. And once again, don\'t forget new. \n Step 6: Actually draw the shapes you added \n … \n stage.draw(); \n Just adding the shapes to the layer does NOT make the browser draw them. To save processing power, the browser doesn\'t draw anything on the screen until you ask it to. Add all of the shapes you want to your layer, then call stage.draw() to finally draw everything in the stage onto the canvas. \n Other useful properties for a Konva.Rect \n stroke (string) color of the rectangle\'s outline strokeWidth (number) width of the rectangle\'s outline cornerRadius (number) rounds corners to this radius opacity (number) from 0 to 1 (0 is fully transparent, 1 is fully opaque) rotation (number) degrees of clockwise rotation \n There are far more properties than these available. See the entire list at \n http://konvajs.github.io/api/Konva.Rect.html \xa0 \n Steps Recap \n Load the Konva.JS library (script tag in HTML) Create an HTML element to hold the canvas Create a stage Create a layer and add it to your stage Create shapes and add them to your layer Call stage.draw() to draw those shapes onto the canvas \n \n Konva.Circle var redCircle = new Konva.Circle({ x: 20, y: 20, radius: 10, fill: \'red\' }); (x, y) are the coordinates of the center of the circle. (Remember that for a Konva.Rect, they were the upper left corner.) \n \n Konva.Ellipse var greenEllipse = new Konva.Ellipse({ x: 20, y: 20, radius: {x: 10, y: 5}, fill: \'green\' }); Notice that the radius property of an ellipse is an object with keys x and y so you can make the horizontal and vertical sizes different. (x, y) is still the center. \n \n \n What if I don\'t want the inside filled in? \n \n \n var greenEllipse = new Konva.Ellipse({ x: 20, y: 20, radius: {x: 10, y: 5}, stroke: \'green\' }); \n This will create an ellipse outlined in green, but with the inside empty since there is no fill. \n You can use both a stroke and a fill in the same shape if you want. This lets you make a green outline filled with red, for example. \n Productivity Tip: Add several shapes to the layer at once \n var redRect = new Konva.Rect({ blah, blah, blah }); var blueRect = new Konva.Rect({ blah, blah, blah }); var redCircle = new Konva.Rect({ blah, blah, blah }); var blueCircle = new Konva.Rect({ blah, blah, blah }); \n layer.add(redRect, blueRect, redCircle, blueCircle); \n The order matters! Shapes you add to the layer later will cover up shapes added earlier if they overlap. \n Even more productivity: The clone method \n var leftCircle = new Konva.Circle({ x: 20, y: 20, radius: 10, fill: \'#ff0000\' }); \n var rightCircle = leftCircle.clone({ x: 60 }); \n With the clone method, I only have to specify the properties that are different from the shape I\'m copying. \n Konva.Line \n var blueV = new Konva.Line({ points: [50, 50, 100, 100, 150, 50], stroke: \'blue\', strokeWidth: 4  }); \n This creates a line starting at the ordered pair (50, 50), then to (100, 100), and then to (150, 50). \n Making a Polygon \n var blueV = new Konva.Line({ points: [50, 50, 100, 100, 150, 50], stroke: \'blue\', strokeWidth: 4, closed: true  }); \n If you set the closed property to true, Konva automatically adds a segment from the last point back to the first point. This also allows you to add a fill if you wish. \n Productivity Tip: Use x and y with Konva.Line \n var blueV = new Konva.Line({ points: [50, 50, 100, 100, 150, 50], stroke: \'blue\', }); \n var theSame = new Konva.Line({ x: 50, y: 50, points: [0, 0, 50, 50, 100, 0],  stroke: \'blue\', }); \n These two shapes are exactly the same. The second one moves the point (0,0) of the line to (50,50) of the canvas, and calculates everything else accordingly. You can use x and y to avoid recalculating every ordered pair if you decide you want everything 10 pixels to the right, for example. \n \n \n', 'tags': '', 'url': 'Konva.html'}, {'title': 'X3d', 'text': '利用 X3d 或 three.js 檢視 3D 零組件? \n https://doc.x3dom.org/tutorials/basics/htmlCSS/index.html \xa0 \n https://codefluegel.com/en/3d-im-browser/ \xa0 \n http://3dspace.com/2016/02/x3dom-vs-three-js/ \xa0 \n http://doc.instantreality.org/tutorial/direct-scene-manipulations-with-javascript/ \xa0 \n https://www.elphel.com/blog/2015/12/x3d-assemblies-from-any-cad/ \xa0 \n \n \n This is my first html page with some 3d objects.                                                     ', 'tags': '', 'url': 'X3d.html'}, {'title': 'Wagtail', 'text': '要參與 Wagtail 內容管理系統程式開發嗎? \n https://github.com/wagtail/wagtail \xa0 \n https://github.com/wagtail/bakerydemo \xa0 \n https://github.com/mhnbcu/wagtailbakery \xa0', 'tags': '', 'url': 'Wagtail.html'}, {'title': 'Fossil SCM', 'text': '除了 Git, 您還需要了解如何使用 Fossil SCM, Why? \n https://www.fossil-scm.org \xa0 \n Fossil SCM 簡介:\xa0 http://mde.tw/2017springcd/blog/intro-fossil-scm.html \xa0 \n 編譯 Fossil SCM:\xa0 http://lab.kmol.info/blog/msys2_compile_fossil_scm.html \xa0 \n http://mde.tw/2017springwcm/blog/2017spring-ubuntu-stunnel-fossil.html \n http://mde.tw/2017springwcm/blog/2017spring-stunnel-fossil.html \xa0 \n \n 以下為建立各學員倉儲的程式: \n import os\nimport string\nimport random\n# 使用 Gmail 寄信\nimport smtplib\nimport re\nfrom email.mime.text import MIMEText  \nfrom email.header import Header\n\ndef id_generator(size=6, chars=string.ascii_uppercase + string.digits):\n    \'\'\'\n    source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python\n    \'\'\'\n    return \'\'.join(random.choice(chars) for _ in range(size))\n\n# 讀取學員名單, 逐一取得學員學號, 學員名單, , 檢查點 1/7\nstudent_data = open("2017fall_list/1b.txt").read()\nstudent_list = student_data.splitlines()\n\n# 利用 gmail smtp 功能寄信\nserver = smtplib.SMTP(\'smtp.gmail.com:587\')\nserver.ehlo()\nserver.starttls()\n# 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7\n\'\'\'\n寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限\n否則無法使用程式寄信!\n\'\'\'\n# 從外部檔案讀取要用來寄信的 gmail 帳號與密碼\n# mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7\nemail_data = open("z:/2017fall/mail.txt").read()\nemail, email_password= email_data.split(",")\nprint(email, email_password)\n# 是否登入所提供寄信的電子郵箱, 4/7\nserver.login(email, email_password)\n# 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7\ncourse_title = "計算機程式"\nfossil_server = "cpb.kmol.info"\n\nfor student_num in student_list:\n    username = student_num\n    repository = username + \'.fossil\'\n    # 利用所提供的字串, 以亂數組成六個字元的密碼\n    password = id_generator(6, "23456789abcdef")\n    print(student_num, ", " , password)\n\n    # 執行 dos command 指令, 建立倉儲\n    os.system("fossil init -A " +username + " " + repository)\n    print("已經建立倉儲 " + repository)\n\n    # 執行 dos command 指令, 修改使用者密碼\n    os.system("fossil user password " + username + " " + password + " -R " + repository)\n    print("已經修改密碼")\n    \n    # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼\n    # 每一位學員收到的 output 都從這裡 reset\n    output = ""\n    # 若學號欄為空, 則不寄信\n    if student_num != "":\n        # output 為寄給每一位學員的資料表格\n        mail_content = student_num+\' 您好: <br /><br /> 您在 \'+course_title+\' 課程中的區域網路倉儲: <a href="https://\'+fossil_server+\'/\'+student_num+\'">https://\'+fossil_server+\'/\'+student_num+\'</a><br /><br />\'\n        mail_content += \'管理帳號為:\'+ student_num + \'<br /> 管理密碼為: \'+ password+\'<br /><br />\'\n        print(student_num)\n        print(mail_content)\n        # 至此 mail_content 已經確定\n        # 在測試與實際寄送資料, 也必須配合修改, 檢查點  6/7\n        receiver_email = student_num + "@gm.nfu.edu.tw"\n        # 測試用\n        #receiver_email = student_num+"@mde.tw"\n        # 列出收信人 email 位址\n        #print(receiver_email)\n        #message= MIMEText(mail_content,\'plain\',\'UTF-8\')\n        # 以 html 格式寄信\n        message= MIMEText(mail_content,\'html\',\'UTF-8\')\n        message[\'Subject\'] = Header(course_title+" Fossil SCM 帳號通知", \'UTF-8\') \n        # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7\n        server.sendmail("gmail_address", receiver_email, message.as_string())\nserver.quit() \n 至於產生上述多學員連結的程式: \n student_data = open("2017fall_list/1b.txt").read()\nstudent_list = student_data.splitlines()\n\nfor student_num in student_list:\n    print("  *  [https://cpb.kmol.info/"+student_num+"|"+student_num+"]") \n 已知問題: server cache 在網路連線過程經常丟失, 編輯內容時要先以 ctrl + c 暫存內容後再送出.', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': '參考資料', 'text': 'Development of CMS-based Web Applications with a Multi-Language Model-Driven Approach.pdf  (2013 Ph.D. Dissertation) \n Building a Web Content Management System (2012 M.S. thesis) \n https://sdsu-dspace.calstate.edu/bitstream/handle/10211.10/3228/Shah_Rima.pdf \xa0(local download) \n Web Content Management Software Usability and Performance.pdf  (2018 M.S. Thesis) \n Harvard University online course \n https://online-learning.harvard.edu/course/introduction-web-content-management-systems-site-development-0 \xa0 \n \n 上述課程說明: \n In a rapidly changing world, the need for online publishers to  keep up with  the needs and expectations of their site visitors is paramount.    Today, many web publishers use  content management systems  (CMS) to allow them to  instantly  and dynamically update web pages and properties as new content becomes available so that every visit to a site is engaging, informative, and meaningful. \n This course explores the use of the three most popular  open source web-based content management systems —Wordpress, Joomla, and Drupal—to create dynamic and flexible websites and landing pages. \n Participants explore the fundamentals of  planning  dynamic websites, CMS  database  management, developing  CSS -controlled site templates, and creating database-driven websites through the planning and creation of their own  topic-based  sites. \n 荷事生非 \n 虎擔妙算', 'tags': '', 'url': '參考資料.html'}]};