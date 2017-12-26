class Paragraph < ActiveRecord::Base

  # validazione
  validates :profile_id, presence: true
  validates :facebook_id, uniqueness: { allow_blank: true }

  # relazioni
  has_many :phrases, :dependent => :destroy
  belongs_to :profile

  # funzione che ritorna il numero di parole del paragrafo
  def words_count
    words_count = 0
    self.phrases.each do |phrase|
      words_count = words_count + phrase.words_count
    end
    return words_count
  end

  # funzione che ritorna la stringa del pararafo
  def content
    # estraggo le frasi e verifico che esistano
    phrases = self.phrases.order('paragraph_position ASC')
    return '' if !phrases
    # genero il risultato
    content = ''
    phrases.each do |phrase|
      content = "#{content}#{phrase.print} "
      content content.gsub(/\ +$/, '') if phrase === phrases.last
    end
    # ritorno il risultato
    return content
  end

  # funzione che ritorna la stringa del pararafo evidenziando la frase passata
  # come parametro
  def content_underline(special_phrase)
    # estraggo le frasi e verifico che esistano
    phrases = self.phrases.order('paragraph_position ASC')
    return '' if !phrases
    # genero il risultato
    content = ''
    phrases.each do |phrase|
      if phrase === special_phrase
        content = "#{content}<b>#{phrase.print}</b> "
      else
        content = "#{content}#{phrase.print} "
      end
      content = content.gsub(/\ +$/, '') if phrase === phrases.last
    end
    # ritorno il risultato
    return content
  end

  # Funzione che prende in input un'insieme di frasi e
  # memorizza le frasi separate tra loro collegate allo stesso paragrafo
  def create_phrases(phrases)
    # separo le frasi rispetto al punto
    return false if !phrases
    phrases = phrases.gsub('. ', '.###')
    phrases = phrases.gsub('? ', '?###')
    phrases = phrases.gsub('! ', '!###')
    phrases = phrases.gsub(".\n", '!###')
    phrases = phrases.split('###')
    phrases.each_with_index do |phrase, position|
      phrase = Phrase.new(content: phrase, paragraph_id: self.id, paragraph_position: position, profile_id: self.profile.id)
      phrase.save
    end
  end

end
