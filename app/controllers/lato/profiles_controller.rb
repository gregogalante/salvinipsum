class Lato::ProfilesController < Lato::LatoController

  before_action do
    view_setCurrentVoice('profiles')
  end

  def show
    redirect_to edit_lato_profile_path(params[:id])
  end

  def index
    @search_profiles = Profile.ransack(params[:q])
    @profiles = @search_profiles.result.paginate(page: params[:page], per_page: 15).order('name ASC')
  end

  def new
    @profile = Profile.new
  end

  def create
    profile = Profile.new(profile_params)
    if !profile.save
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to new_lato_profile_path and return false
    end

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_profile_path(profile)
  end

  def edit
    @profile = Profile.find(params[:id])
    @phrases = @profile.phrases.paginate(page: params[:page], per_page: 10).order('created_at DESC')
  end

  def update
    profile = Profile.find(params[:id])
    if !profile
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to new_lato_profile_path and return false
    end

    if !profile.update(profile_params)
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to new_lato_profile_path and return false
    end

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_profile_path(profile)
  end

  def destroy
    profile = Profile.find(params[:id])
    profile.destroy

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_profiles_path
  end

  def delete_picture
    profile = Profile.find(params[:id])
    if !profile
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to lato_profiles_path and return false
    end

    profile.picture = nil
    profile.save

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_profile_path(profile)
  end

  # Save datas from facebook
  def feeds
    profile = Profile.find(params[:id])
    profile.feeds
    redirect_to lato_profile_path(profile)
  end

end
