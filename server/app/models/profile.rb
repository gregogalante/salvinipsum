class Profile < ActiveRecord::Base

  # validazione
  validates :name, uniqueness: true, presence: true
  validates :key, uniqueness: true, presence: true
  validates :facebook_id, uniqueness: { allow_blank: true }

  # relazioni
  has_many :paragraphs, :dependent => :destroy
  has_many :phrases, :dependent => :destroy

  # funzione che esegue la sincronizzazione con i dati di fb
  def feeds
    oauth = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET)
    graph = Koala::Facebook::API.new(oauth.get_app_access_token)
    feeds = graph.get_connections(self.facebook_id, "posts")
    feeds.each do |feed|
      paragraph = Paragraph.new(facebook_id: feed['id'], profile_id: self.id)
      paragraph.create_phrases(feed['message']) if paragraph.save
    end
  end

  # funzione che esegue la sincronizzazione dei feeds per tutti profili
  def self.feeds_all
    profiles = Profile.all
    profiles.each do |profile|
      profile.feeds
    end
  end

end
