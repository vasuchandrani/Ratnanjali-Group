import { commonData } from "@/data/common";

export function WhatsAppButton() {
  const number = commonData.whatsapp;
  const url = `https://wa.me/91${number}?text=Hello%20Ratnanjali%20Group,%20I%20would%20like%20to%20begin%20a%20conversation.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-basalt border border-gold/50 text-gold hover:text-gold-bright hover:border-gold hover:scale-110 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 pulse-gold cursor-pointer"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.988 4.48-9.988 9.984 0 1.764.456 3.48 1.332 5.004L2 22l5.124-1.332a9.96 9.96 0 0 0 4.888 1.284h.004c5.506 0 9.988-4.48 9.988-9.984C22.016 6.48 17.528 2 12.012 2zm0 18.396a8.337 8.337 0 0 1-4.248-1.164l-.304-.18-3.156.828.84-3.084-.196-.312a8.318 8.318 0 0 1-1.272-4.476c0-4.604 3.748-8.352 8.352-8.352 2.232 0 4.328.868 5.908 2.448a8.272 8.272 0 0 1 2.44 5.904c-.004 4.608-3.752 8.356-8.356 8.356zm4.572-6.252c-.252-.124-1.476-.728-1.704-.812-.228-.084-.396-.124-.564.124-.168.252-.648.812-.792.98-.148.168-.292.188-.544.064a6.93 6.93 0 0 1-2.02-1.248 7.647 7.647 0 0 1-1.396-1.74c-.148-.252-.016-.388.108-.512.112-.112.252-.292.38-.44.124-.148.168-.252.252-.42.084-.168.044-.316-.02-.44-.064-.124-.564-1.36-.772-1.864-.2-.488-.4-.424-.564-.432-.144-.008-.312-.008-.48-.008-.168 0-.44.064-.672.316-.228.252-.876.856-.876 2.088s.896 2.42 1.02 2.588c.124.168 1.76 2.684 4.264 3.764.596.256 1.06.408 1.424.524.6.192 1.144.164 1.576.1.48-.072 1.476-.604 1.68-.188.204.416.204.772.104.98-.1.208-.476.324-.728.2z" />
      </svg>
    </a>
  );
}
