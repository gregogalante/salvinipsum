class Phrase < ActiveRecord::Base

  # validazione
  validates :content, presence: true
  validates :profile_id, presence: true

  # relazioni
  belongs_to :paragraph
  belongs_to :profile

  before_create do
    # pulizia della frase
    remove_athead
    remove_point
    remove_quotation_marks
    capitalize_phrase
    # memorizzazione dati aggiuntivi
    count_words
    # controllo lunghezza frase
    check_length
    # controllo presenza di url
    check_url
  end

  # funzione che torna la frase con la punteggiaura corretta
  def print
    return self.content if self.content.end_with?('?') || self.content.end_with?('!')
    return "#{self.content}."
  end

  # funzione che ritorna il nome del profilo a cui appartiene la frase
  def profile_name
    return self.profile.name
  end

  ##############################################################################
  # Controlli pre-salvataggio

  # Funzioni per la pulizia della frase
  # ---------------------------------------------------------------------------

  # funzione che rimuove il punto finale dalla frase prima del salvataggio
  private def remove_point
    self.content = self.content.gsub(/\.$/, '')
  end

  # funzione che rimuove gli 'a capo' prima del salvataggio
  private def remove_athead
    self.content = self.content.gsub("\n", '')
  end

  # funzione che rimuove il " se presente a inizio / fine frase
  private def remove_quotation_marks
    length = self.content.length

    self.content[0] = '' if self.content[0] === '"'
    self.content[length-1] = '' if self.content[length-1] === '"'
  end

  # funzione che esegue il capitalize alla frase
  private def capitalize_phrase
    self.content = self.content.capitalize
  end

  # Funzioni per la memorizzazione di dati aggiuntivi
  # ---------------------------------------------------------------------------

  # funzione che conta il numero di parole e lo memorizza prima del salvataggio
  private def count_words
    self.words_count = self.content.split(' ').length
  end

  # Funzioni per i controlli
  # ---------------------------------------------------------------------------

  # funzione che controlla che la lunghezza della frase sia limitata, altrimenti
  # la scarta
  private def check_length
    throw :abort if self.words_count > 20
  end

  # funzione che controlla la assenza di url nella frase, se essa contiene url allora
  # viene scartata
  private def check_url
    throw :abort if "www.".in? self.content
    throw :abort if "Www.".in? self.content
    throw :abort if "http://".in? self.content
    throw :abort if "https://".in? self.content
    throw :abort if "Http://".in? self.content
    throw :abort if "Https://".in? self.content
    throw :abort if ".com".in? self.content
    throw :abort if ".it".in? self.content
  end

end
