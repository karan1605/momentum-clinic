# Design reference

Source: https://stavyaspine.com/
Page: Stavya Spine Hospital \| Best Spine Hospital in India

Measured from 130 rendered elements at 1536 x 695px. This is a sample of the current document and state, not the original design source.

## Color palette

Only observed CSS colors are listed. Usage labels describe where a color was found. Hex is an sRGB preview; retain the original CSS value for its color space and transparency.

Usage | Original CSS value | sRGB hex | Observed root properties | Occurrences
--- | --- | --- | --- | ---
Text | rgb(33, 50, 69) | #213245 |  | 14
Text | rgb(89, 97, 107) | #59616B |  | 14
Text | rgb(255, 255, 255) | #FFFFFF | --color-common-white, --bs-white | 5
Text | rgb(2, 94, 193) | #025EC1 |  | 4
Text | rgb(13, 110, 253) | #0D6EFD | --bs-primary | 2
Surface | rgb(255, 255, 255) | #FFFFFF | --color-common-white, --bs-white | 7
Surface | rgb(2, 94, 193) | #025EC1 |  | 6
Surface | rgb(33, 50, 69) | #213245 |  | 5
Surface | rgb(245, 249, 254) | #F5F9FE |  | 2
Surface | rgba(2, 94, 193, 0.06) | #025EC10F |  | 1
Surface | rgb(24, 119, 242) | #1877F2 |  | 1
Surface | rgb(37, 211, 102) | #25D366 |  | 1
Surface | rgb(255, 0, 0) | #FF0000 |  | 1
Surface | rgb(10, 102, 194) | #0A66C2 |  | 1
Surface | rgb(245, 246, 246) | #F5F6F6 |  | 1
Border | rgba(0, 0, 0, 0.08) | #00000014 |  | 1
Border | rgb(2, 94, 193) | #025EC1 |  | 1
Gradient | rgb(1, 38, 77) | #01264D |  | 2
Gradient | rgb(240, 148, 51) | #F09433 |  | 1
Gradient | rgb(230, 104, 60) | #E6683C |  | 1
Gradient | rgb(220, 39, 67) | #DC2743 |  | 1
Gradient | rgb(204, 35, 102) | #CC2366 |  | 1
Gradient | rgb(188, 24, 136) | #BC1888 |  | 1
Gradient | rgb(1, 56, 116) | #013874 |  | 1

## Typography

Role | Family | Size | Weight | Line height | Tracking | Text transform
--- | --- | --- | --- | --- | --- | ---
Heading | Manrope, sans-serif | 65px | 700 | 65px | -1.3px | none
Subheading | Manrope, sans-serif | 32px | 700 | 44.8px | normal | capitalize
Body | Manrope, sans-serif | 16px | 500 | 26px | normal | none
Button | Manrope, sans-serif | 16px | 600 | 26px | normal | none

## Spacing

Value | Occurrences
--- | ---
2px | 12
5px | 2
8px | 16
10px | 12
16px | 27
20px | 18
22px | 1
24px | 5
30px | 1
100px | 15
145.887px | 1

## Layout gaps

Value | Occurrences
--- | ---
4px | 2
5px | 18
10px | 10
12px | 24

## Corner radii

Value | Occurrences
--- | ---
12px | 48
20px | 4
50% | 92
50px | 20
100px | 4

## Shadows

Value | Occurrences
--- | ---
rgba(0, 0, 0, 0.18) 0px 4px 10px 0px | 5

## Motion durations

Value | Occurrences
--- | ---
0.3s | 117
0.4s | 5
0.6s | 1

## Motion easing

Value | Occurrences
--- | ---
ease-in-out | 81
ease | 37
cubic-bezier(0.175, 0.885, 0.32, 1.275) | 5

### Accessible keyframe names

- sbr-sk-scaleout
- sbr-spin
- progress-bar-stripes
- spinner-border
- spinner-grow
- placeholder-glow
- placeholder-wave
- bounce
- flash
- pulse
- rubberBand
- shakeX

## Component recipes

Computed styles for the captured state. Selectors identify sampled elements; text and placeholders come from the page. Form values are excluded. These style specimens do not reconstruct child markup or uncaptured interaction states.

### Button 1

Observed text or placeholder: Book Appointment

```css
a.primary-btn {
  align-items: center;
  backdrop-filter: none;
  background-color: rgb(2, 94, 193);
  background-image: none;
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: none;
  border-left-width: 0px;
  border-radius: 50px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: none;
  border-top-width: 0px;
  box-shadow: none;
  color: rgb(255, 255, 255);
  display: inline-flex;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 16px;
  opacity: 1;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 24px;
  padding-top: 8px;
  text-transform: capitalize;
}
```

Ancestor backgrounds (outermost first):

Layer | Background color | Background image | Opacity
--- | --- | --- | ---
1 | rgb(255, 255, 255) | none | 1

### Button 2

Observed text or placeholder: Book Appointment

```css
a.primary-btn {
  align-items: center;
  backdrop-filter: none;
  background-color: rgb(2, 94, 193);
  background-image: none;
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: none;
  border-left-width: 0px;
  border-radius: 50px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: none;
  border-top-width: 0px;
  box-shadow: none;
  color: rgb(255, 255, 255);
  display: flex;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 16px;
  opacity: 1;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 24px;
  padding-top: 8px;
  text-transform: capitalize;
}
```

Ancestor backgrounds (outermost first):

Layer | Background color | Background image | Opacity
--- | --- | --- | ---
1 | rgb(255, 255, 255) | none | 1

### Button 3

Observed text or placeholder: Telemedicine

```css
a.primary-btn.white {
  align-items: center;
  backdrop-filter: none;
  background-color: rgb(255, 255, 255);
  background-image: none;
  border-bottom-color: rgb(2, 94, 193);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 94, 193);
  border-left-style: none;
  border-left-width: 0px;
  border-radius: 50px;
  border-right-color: rgb(2, 94, 193);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(2, 94, 193);
  border-top-style: none;
  border-top-width: 0px;
  box-shadow: none;
  color: rgb(2, 94, 193);
  display: flex;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 16px;
  opacity: 1;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 24px;
  padding-top: 8px;
  text-transform: capitalize;
}
```

Ancestor backgrounds (outermost first):

Layer | Background color | Background image | Opacity
--- | --- | --- | ---
1 | rgb(255, 255, 255) | none | 1

## Layout measurements

Element | Width | Display | Columns | Gap | Padding (T R B L)
--- | --- | --- | --- | --- | ---
main | 1521px | block | none | normal | 0px 0px 0px 0px
header | 1521px | block | none | normal | 0px 0px 0px 0px
section | 1521px | block | none | normal | 0px 0px 0px 0px
section | 1521px | block | none | normal | 100px 0px 100px 0px
section | 1521px | block | none | normal | 0px 0px 100px 0px
section | 1521px | block | none | normal | 0px 0px 100px 0px
section | 1521px | block | none | normal | 100px 0px 100px 0px
section | 1521px | block | none | normal | 100px 0px 100px 0px
section | 1521px | block | none | normal | 0px 0px 100px 0px
section | 1521px | block | none | normal | 100px 0px 100px 0px

## Responsive conditions

- `(max-width: 450px)`
- `(max-width: 640px)`
- `(max-width: 480px)`
- `(min-resolution: 192dpi)`
- `screen and (max-width: 600px)`
- `(prefers-reduced-motion: no-preference)`
- `(min-width: 1200px)`
- `(min-width: 576px)`
- `(min-width: 768px)`
- `(min-width: 992px)`
- `(min-width: 1400px)`
- `(max-width: 575.98px)`
- `(max-width: 767.98px)`
- `(max-width: 991.98px)`
- `(max-width: 1199.98px)`
- `(max-width: 1399.98px)`
- `(prefers-reduced-motion: reduce)`
- `(max-width: 575.98px) and (prefers-reduced-motion: reduce)`
- `(max-width: 767.98px) and (prefers-reduced-motion: reduce)`
- `(max-width: 991.98px) and (prefers-reduced-motion: reduce)`

## CSS custom properties

Names and values read from the root element; no new token names or ramps were generated.

Property | Value
--- | ---
--input-border | #D1D8E0
--bs-orange | #fd7e14
--bs-link-hover-color-rgb | 10,88,202
--wp-admin-theme-color-darker-20 | #005a87
--wp--preset--font-size--large | 36px
--wp--preset--shadow--outlined | 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0)
--bs-warning-bg-subtle | #fff3cd
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan | linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)
--bs-success | #198754
--wp--preset--color--vivid-purple | #9b51e0
--wp--preset--gradient--blush-light-purple | linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)
--bs-danger-text-emphasis | #58151c
--bs-border-style | solid
--bs-warning-rgb | 255,193,7
--bs-info-text-emphasis | #055160
--wp-bound-block-color | #7a00df
--bs-body-font-weight | 400
--bs-code-color | #d63384
--bs-border-radius-2xl | 2rem
--bs-primary | #0d6efd
--wp--preset--gradient--electric-grass | linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)
--bs-body-line-height | 1.5
--wp--preset--gradient--blush-bordeaux | linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)
--wp--preset--shadow--deep | 12px 12px 50px rgba(0, 0, 0, 0.4)
--bs-light-bg-subtle | #fcfcfd
--bs-box-shadow | 0 0.5rem 1rem rgba(0, 0, 0, 0.15)
--bs-purple | #6f42c1
--bs-green | #198754
--bs-primary-border-subtle | #9ec5fe
--bs-link-hover-color | #0a58ca
--bs-box-shadow-inset | inset 0 1px 2px rgba(0, 0, 0, 0.075)
--bs-cyan | #0dcaf0
--bs-info-rgb | 13,202,240
--wp-admin-theme-color-darker-20--rgb | 0,90,135
--wp--preset--spacing--40 | 1rem
--bs-breakpoint-xs | 0
--bs-border-radius-sm | 0.25rem
--bs-primary-text-emphasis | #052c65
--wp-admin-theme-color--rgb | 0,124,186
--bs-gray-400 | #ced4da
--bs-dark-text-emphasis | #495057
--wp--preset--color--luminous-vivid-orange | #ff6900
--bs-primary-bg-subtle | #cfe2ff
--bs-pink | #d63384
--color-common-white | #ffffff
--swiper-theme-color | #007aff
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple | linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%)
--bs-gray-100 | #f8f9fa
--shadow-card | 0 2px 12px rgba(33, 50, 69, 0.08)
--bs-link-decoration | underline
--bs-border-radius | 0.375rem
--bs-white | #fff
--bs-danger | #dc3545
--fw-ebold | 800
--bs-gray-600 | #6c757d
--wp-admin-theme-color-darker-10--rgb | 0,107,160.5
--wp--preset--color--vivid-cyan-blue | #0693e3
--fw-thin | 100
--wp--preset--shadow--natural | 6px 6px 9px rgba(0, 0, 0, 0.2)
--bs-body-bg-rgb | 255,255,255

## Capture coverage

- 1 stylesheet(s) could not be inspected. Computed styles are still measured.
- Sampling excludes hidden elements and Sitepeel tools. Offscreen rendered elements may be included. Counts refer to the sample, not the entire website.
- Colors are CSS values, not a screenshot pixel palette. Images, compositing and gradients can affect their visible appearance.
- Hover, focus, active states, other viewport sizes, iframe documents and shadow trees need separate captures.
- No inferred brand personality, invented colors, placeholder copy or unobserved code is presented as a page measurement.
