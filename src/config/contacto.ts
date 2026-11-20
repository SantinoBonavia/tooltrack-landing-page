/**
 * Datos de contacto de la landing. Mientras estén vacíos, el formulario y el botón de WhatsApp
 * se muestran pero avisan que todavía no están conectados.
 */
export const contacto = {
  /**
   * Access key de Web3Forms (https://web3forms.com): se crea gratis poniendo el mail donde
   * queremos recibir los pedidos. Es pública por diseño, se puede subir al repo.
   */
  web3formsKey: '',

  /** Número de WhatsApp solo con dígitos y código de país, por ejemplo 5493511234567. */
  whatsapp: '',

  /** Mensaje que aparece ya escrito al abrir el chat. */
  mensajeWhatsapp: 'Hola, quiero ver una demo de TOOLTRACK.',
}

export const whatsappUrl = contacto.whatsapp
  ? `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.mensajeWhatsapp)}`
  : null
