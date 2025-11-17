# Bitume Africa - Frontend UI Task

This is a news feed application built for the Bitume Africa frontend recruitment process. It fetches live data from the NewsAPI and displays it in a clean, responsive interface.

**Live Demo:** [https://bitume-livid.vercel.app/](https://bitume-livid.vercel.app/)

**GitHub Repo:** [https://github.com/Fortexfreddie/bitume/](https://github.com/Fortexfreddie/bitume/)

---

## 🚀 Features

* **Latest Headlines:** Fetches and displays top headlines from the NewsAPI.
* **Category Filtering:** Users can filter news by category (e.g., Technology, Sports, Business).
* **Search:** Users can search for articles. The search respects the currently active category.
* **Loading & Error States:** The app displays a loading state while fetching and handles API errors gracefully.
* **Responsive Design:** Built with Tailwind CSS, the layout is fully responsive for mobile, tablet, and desktop.
* **External Links:** Article cards link directly to the original source in a new tab.

---

## 🛠️ Tech Stack

* **Next.js** (App Router)
* **React**
* **Tailwind CSS** (for styling)
* **NewsAPI.org** (as the data source)
* **Vercel** (for deployment)

---

## ⚙️ How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Fortexfreddie/bitume.git](https://github.com/Fortexfreddie/bitume.git)
    ```

2.  **Navigate to the directory:**
    ```bash
    cd bitume
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project.

5.  **Add your API key:**
    Inside `.env.local`, add the following line (you can get a free key from [NewsAPI.org](https://newsapi.org/)):
    ```
    NEWS_API_KEY=YOUR_OWN_NEWSAPI_KEY_HERE
    ```

6.  **Run the development server:**
    ```bash
    npm run dev
    ```

7.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.
