# 🎨 Design System — Frontend Practice Landing Page

Tujuan design system ini:
✅ kamu fokus latihan **HTML + CSS**
✅ nggak bingung pilih warna/font
✅ project keliatan clean & modern
✅ cocok buat latihan responsive navbar + hero

---

# 🌈 Color Palette

## Primary

```css id="primary-color"
--primary-color: #2563eb;
```

👉 warna utama button / highlight

---

## Secondary

```css id="secondary-color"
--secondary-color: #1e293b;
```

👉 warna navbar / dark text

---

## Background

```css id="background-color"
--background-color: #f8fafc;
```

---

## Text

```css id="text-color"
--text-color: #0f172a;
--text-secondary: #64748b;
```

---

## Border / Soft

```css id="soft-color"
--border-color: #e2e8f0;
```

---

# ✍️ Typography

## Font

Gunakan:

- Google Fonts → **Poppins**

---

## Font Size System

```css id="font-size"
--fs-xl: 48px;
--fs-lg: 32px;
--fs-md: 20px;
--fs-base: 16px;
--fs-sm: 14px;
```

---

## Font Weight

```css id="font-weight"
300 -> light
400 -> regular
500 -> medium
600 -> semi-bold
700 -> bold
```

---

# 📦 Spacing System

Biar layout rapi & konsisten

```css id="spacing-system"
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 48px;
--space-6: 64px;
```

---

# 🔘 Button System

## Primary Button

```css id="primary-button"
.btn-primary {
  background: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}
```

---

## Secondary Button

```css id="secondary-button"
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  padding: 12px 24px;
  border-radius: 10px;
}
```

---

# 🧱 Layout Rules

## Container

```css id="container-layout"
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
```

---

## Section Padding

```css id="section-padding"
section {
  padding: 80px 0;
}
```

---

# 🧭 Navbar Style Direction

## Desktop

- logo kiri
- nav tengah/kanan
- button signup kanan

## Mobile

- nav hidden
- hamburger muncul
- dropdown vertical

---

# 🖼️ Hero Section Direction

## Layout

Gunakan:

```css id="hero-layout"
display: flex;
justify-content: space-between;
align-items: center;
```

---

## Hero Content

Kiri:

- headline
- description
- CTA button

Kanan:

- image / illustration

---

# 📱 Responsive Breakpoint

```css id="responsive-breakpoint"
@media (max-width: 768px);
```

Di mobile:

- navbar jadi column/dropdown
- hero jadi vertical
- text center

---

# ✨ Animation Rules (Optional Bonus)

## Hover

```css id="hover-effect"
transition: all 0.2s ease;
```

---

## Navbar Scroll

Gunakan:

- blur
- transparent background

---

# 🧠 Component Checklist

## SELASA ✅

Navbar:

- [ ] logo
- [ ] nav links
- [ ] hover effect
- [ ] responsive
- [ ] hamburger

---

## RABU ✅

Hero:

- [ ] headline
- [ ] paragraph
- [ ] CTA
- [ ] image
- [ ] responsive

---

# 🚀 Final Goal Visual

Style target:

- clean
- modern SaaS
- mirip:
  - Stripe
  - Vercel
  - Linear

---

# 🔥 Saran Penting Buat Kamu

Saat latihan:

- ❌ jangan fokus perfect
- ❌ jangan pixel perfect
- ✅ fokus:
  - layout
  - responsive
  - struktur HTML
  - CSS consistency

---

# 🎯 Challenge Tambahan (kalau cepat selesai)

Tambahkan:

- sticky navbar
- navbar blur saat scroll
- smooth scroll
- hero animation ringan
- mobile menu animation
