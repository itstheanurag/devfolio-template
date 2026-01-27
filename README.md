# DevFolio Template 🚀

DevFolio is a high-performance, minimalist, and highly customizable portfolio template designed for software engineers and tech professionals. Built with **Next.js**, **React 19**, and **Tailwind CSS**, it offers a sleek interface to showcase your work, experience, and technical stats.

![DevFolio Preview](/public/devfolio.png)

## 🌟 Features

- **📊 Dynamic Stats**: Integration with GitHub and LeetCode to display your coding activity.
- **💼 Work Experience**: A clean timeline of your professional journey.
- **🚀 Project Showcase**: Highlight your best work with GitHub links and live demos.
- **📝 MDX Blog**: Write blog posts using MDX for rich content and code snippets.
- **🛠️ Tech Stack**: Visual representation of your core competencies.
- **💻 Gear List**: Share the tools and workstation setup you use daily.
- **📱 Responsive & Fast**: Optimized for speed and works flawlessly on all devices.
- **🎨 Glassmorphism Design**: Modern, premium aesthetic with subtle animations.

## 👥 Who is it for?

- **Software Developers** who want a professional site that focus on performance and clean code.
- **Product Engineers** looking to showcase both their technical skills and the products they've built.
- **Open Source Contributors** who want to highlight their GitHub impact.
- **Students & Job Seekers** who need a standout portfolio to land their next role.

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/itstheanurag/devfolio-template.git
cd devfolio-template
```

### 2. Install dependencies

```bash
bun install
# or
npm install
```

### 3. Run development server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## ⚙️ Configuration

The entire portfolio is driven by a central configuration system. You don't need to dig into complex components to change your data.

1. **Global Constants**: Edit `data/config.ts` to set your social links, enable/disable features (GitHub stats, LeetCode, etc.), and set API usernames.
2. **Personal Info**: Update `data/index.ts` with your name, role, bio, tech stack, and experience.
3. **Projects**: Add your projects in `data/projects.ts`.

## 📝 Managing Content

### Blogs & Experience

Content is managed via Markdown/MDX files located in the `content/` directory:

- **Blogs**: Add `.md` or `.mdx` files to `content/blog/`.
- **Experience**: Detailed descriptions can be added to `content/experience/` (if configured to use local MDX).

## 🔑 Environment Variables

To enable GitHub integration, create a `.env.local` file in the root directory:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Content**: MDX, Gray-matter, Remark
- **Performance**: Next/Font, Optimized Images

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Anurag](https://github.com/itstheanurag)
